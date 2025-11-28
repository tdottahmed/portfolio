<?php

namespace App\Services;

use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;

class GeminiService
{
    protected $apiKey;
    protected $baseUrl = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-latest:generateContent';
    protected $imagenUrl = 'https://generativelanguage.googleapis.com/v1beta/models/imagen-4.0-generate-preview-06-06:predict';

    public function __construct()
    {
        $this->apiKey = config('services.gemini.key') ?? env('GEMINI_API_KEY');
    }

    public function generateProjectDetails(string $title, array $images = [])
    {
        if (!$this->apiKey) {
            throw new \Exception('Gemini API key is not configured.');
        }

        $prompt = "You are an expert portfolio manager and copywriter. I will provide you with a project title and some screenshots of the project. 
        Your task is to generate detailed content for a portfolio project entry based on this information.
        
        Project Title: {$title}
        
        Please analyze the screenshots (if provided) and the title to infer the functionality, design style, and purpose of the project.
        
        Return the response strictly as a JSON object with the following structure:
        {
            \"subtitle\": \"A catchy, short subtitle (max 10 words)\",
            \"description\": \"A concise summary of the project (2-3 sentences)\",
            \"long_description\": \"A detailed description of the project, its goals, and the problem it solves (2-3 paragraphs)\",
            \"features\": [\"Feature 1\", \"Feature 2\", \"Feature 3\", \"...\"],
            \"technologies\": [\"Tech 1\", \"Tech 2\", \"Tech 3\", \"...\"],
            \"role\": \"Inferred role (e.g., Full Stack Developer, UI/UX Designer)\",
            \"team_size\": \"Inferred team size (e.g., Solo, 3 members)\",
            \"category\": \"Inferred category (e.g., E-commerce, SaaS, Portfolio)\"
        }
        
        Do not include any markdown formatting (like ```json) in the response, just the raw JSON string.";

        $parts = [
            ['text' => $prompt]
        ];

        // Add images to the payload if available
        foreach ($images as $image) {
            // $image is an UploadedFile instance
            $mimeType = $image->getMimeType();
            $data = base64_encode(file_get_contents($image->getRealPath()));

            $parts[] = [
                'inline_data' => [
                    'mime_type' => $mimeType,
                    'data' => $data
                ]
            ];
        }

        try {
            $response = Http::withHeaders([
                'Content-Type' => 'application/json',
            ])->post("{$this->baseUrl}?key={$this->apiKey}", [
                'contents' => [
                    [
                        'parts' => $parts
                    ]
                ]
            ]);

            if ($response->failed()) {
                Log::error('Gemini API Error: ' . $response->body());
                // Throw detailed error for debugging
                throw new \Exception('Gemini API Error (' . $response->status() . '): ' . $response->body());
            }

            $responseData = $response->json();
            
            if (empty($responseData['candidates'][0]['content']['parts'][0]['text'])) {
                 throw new \Exception('Empty response from Gemini API.');
            }

            $text = $responseData['candidates'][0]['content']['parts'][0]['text'];
            
            // Clean up markdown code blocks if present (just in case)
            $text = str_replace(['```json', '```'], '', $text);
            
            return json_decode($text, true);

        } catch (\Exception $e) {
            Log::error('Gemini Service Exception: ' . $e->getMessage());
            throw $e;
        }
    }

    public function generateImage(string $prompt)
    {
        if (!$this->apiKey) {
            throw new \Exception('Gemini API key is not configured.');
        }

        try {
            $response = Http::withHeaders([
                'Content-Type' => 'application/json',
            ])->post("{$this->imagenUrl}?key={$this->apiKey}", [
                'instances' => [
                    ['prompt' => $prompt]
                ],
                'parameters' => [
                    'sampleCount' => 1,
                    'aspectRatio' => '16:9'
                ]
            ]);

            if ($response->failed()) {
                Log::error('Imagen API Error: ' . $response->body());
                
                if ($response->status() === 400 && str_contains($response->body(), 'billed users')) {
                    throw new \Exception('Image generation is only available for paid Gemini API plans. Please upgrade your Google Cloud billing account.');
                }

                throw new \Exception('Imagen API Error (' . $response->status() . '): ' . $response->body());
            }

            $responseData = $response->json();

            if (empty($responseData['predictions'][0]['bytesBase64Encoded'])) {
                 throw new \Exception('Empty response from Imagen API.');
            }

            return $responseData['predictions'][0]['bytesBase64Encoded'];

        } catch (\Exception $e) {
            Log::error('Gemini Service Image Generation Exception: ' . $e->getMessage());
            throw $e;
        }
    }

    public function generateExperienceDetails(string $company, string $position)
    {
        $prompt = "Generate a professional job description for a resume/portfolio.
        Company: {$company}
        Position: {$position}
        
        Return strictly JSON:
        {
            \"description\": \"2-3 sentences summary of the role\",
            \"achievements\": [\"Achievement 1\", \"Achievement 2\", \"Achievement 3\"],
            \"technologies\": [\"Tech 1\", \"Tech 2\", \"Tech 3\"],
            \"highlights\": [\"Highlight 1\", \"Highlight 2\"]
        }";

        return $this->generateContent($prompt);
    }

    public function generateEducationDetails(string $institution, string $degree, string $field)
    {
        $prompt = "Generate details for an education entry in a portfolio.
        Institution: {$institution}
        Degree: {$degree}
        Field of Study: {$field}
        
        Return strictly JSON:
        {
            \"description\": \"1-2 sentences about the program\",
            \"relevant_coursework\": [\"Course 1\", \"Course 2\", \"Course 3\", \"Course 4\"],
            \"projects\": [\"Academic Project 1\", \"Academic Project 2\"]
        }";

        return $this->generateContent($prompt);
    }

    public function generateServiceDetails(string $title)
    {
        $prompt = "Generate details for a freelance/agency service offering.
        Service Title: {$title}
        
        Return strictly JSON:
        {
            \"description\": \"Compelling 2-3 sentence description of the service\",
            \"features\": [\"Feature 1\", \"Feature 2\", \"Feature 3\", \"Feature 4\"],
            \"icon\": \"A suggested Lucide React icon name (e.g. Code, Layout, Smartphone)\"
        }";

        return $this->generateContent($prompt);
    }

    public function generatePostDetails(string $title)
    {
        $prompt = "Generate a blog post outline and content.
        Blog Title: {$title}
        
        Return strictly JSON:
        {
            \"excerpt\": \"A catchy 1-2 sentence summary/hook\",
            \"content\": \"A full blog post in Markdown format (approx 300-500 words). Use headings, lists, etc.\",
            \"category\": \"Suggested category\",
            \"tags\": [\"Tag 1\", \"Tag 2\", \"Tag 3\"],
            \"read_time\": \"Estimated read time (e.g. '5 min read')\"
        }";

        return $this->generateContent($prompt);
    }

    private function generateContent(string $prompt)
    {
        if (!$this->apiKey) {
            throw new \Exception('Gemini API key is not configured.');
        }

        $parts = [['text' => $prompt]];

        try {
            $response = Http::withHeaders([
                'Content-Type' => 'application/json',
            ])->post("{$this->baseUrl}?key={$this->apiKey}", [
                'contents' => [['parts' => $parts]]
            ]);

            if ($response->failed()) {
                Log::error('Gemini API Error: ' . $response->body());
                throw new \Exception('Gemini API Error (' . $response->status() . '): ' . $response->body());
            }

            $responseData = $response->json();
            
            if (empty($responseData['candidates'][0]['content']['parts'][0]['text'])) {
                 throw new \Exception('Empty response from Gemini API.');
            }

            $text = $responseData['candidates'][0]['content']['parts'][0]['text'];
            $text = str_replace(['```json', '```'], '', $text);
            
            return json_decode($text, true);

        } catch (\Exception $e) {
            Log::error('Gemini Service Exception: ' . $e->getMessage());
            throw $e;
        }
    }
}
