<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Project;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Str;

use App\Traits\FileUploadTrait;
use App\Services\GeminiService;

class ProjectController extends Controller
{
    use FileUploadTrait;

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $projects = Project::latest()->get();
        return Inertia::render('Admin/Projects/Index', [
            'projects' => $projects
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Admin/Projects/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'subtitle' => 'nullable|string|max:255',
            'category' => 'nullable|string|max:255',
            'description' => 'nullable|string',
            'long_description' => 'nullable|string',
            'thumbnail' => 'nullable|image|max:2048',
            'gallery_image' => 'nullable|image|max:2048',
            'images' => 'nullable|array',
            'images.*' => 'image|max:2048',
            'technologies' => 'nullable|array',
            'features' => 'nullable|array',
            'achievements' => 'nullable|array',
            'links' => 'nullable|array',
            'timeline' => 'nullable|array',
            'role' => 'nullable|string',
            'team_size' => 'nullable|string',
            'status' => 'required|string',
            'featured' => 'boolean'
        ]);


        $validated['slug'] = Str::slug($validated['title']);

        if ($request->hasFile('thumbnail')) {
            $validated['thumbnail'] = $this->uploadFile($request->file('thumbnail'), 'projects/thumbnails');
        }
        if ($request->hasFile('gallery_image')) {
            $validated['gallery_image'] = $this->uploadFile($request->file('gallery_image'), 'projects/gallery_images');
        }
        if ($request->hasFile('images')) {
            $uploadedImages = [];
            foreach ($request->file('images') as $image) {
                $uploadedImages[] = $this->uploadFile($image, 'projects/gallery');
            }
            $validated['images'] = $uploadedImages;
        }

        Project::create($validated);

        return redirect()->route('admin.projects.index')->with('success', 'Project created successfully.');
    }

    /**
     * Display the specified resource.
     */
    public function show(Project $project)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Project $project)
    {
        return Inertia::render('Admin/Projects/Edit', [
            'project' => $project
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Project $project)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'subtitle' => 'nullable|string|max:255',
            'category' => 'nullable|string|max:255',
            'description' => 'nullable|string',
            'long_description' => 'nullable|string',
            'thumbnail' => 'nullable', // Could be string (old URL) or file (new upload)
            'gallery_image' => 'nullable', // File or string
            'images' => 'nullable|array', // Array of files or strings
            'technologies' => 'nullable|array',
            'features' => 'nullable|array',
            'achievements' => 'nullable|array',
            'links' => 'nullable|array',
            'timeline' => 'nullable|array',
            'role' => 'nullable|string',
            'team_size' => 'nullable|string',
            'status' => 'required|string',
            'featured' => 'boolean'
        ]);

        if ($project->title !== $validated['title']) {
            $validated['slug'] = Str::slug($validated['title']);
        }

        // Handle Thumbnail Upload
        if ($request->hasFile('thumbnail')) {
            $validated['thumbnail'] = $this->uploadFile($request->file('thumbnail'), 'projects/thumbnails', $project->thumbnail);
        } elseif ($request->input('thumbnail') === null || $request->input('thumbnail') === 'null') {
            // Explicitly removed
            if ($project->thumbnail) {
                $this->deleteFile($project->thumbnail);
            }
            $validated['thumbnail'] = null;
        } else {
            // It's a string (old URL) or missing.
            unset($validated['thumbnail']);
        }

        // Handle Gallery Image
        if ($request->hasFile('gallery_image')) {
            $validated['gallery_image'] = $this->uploadFile($request->file('gallery_image'), 'projects/gallery_images', $project->gallery_image);
        } elseif ($request->input('gallery_image') === null || $request->input('gallery_image') === 'null') {
             if ($project->gallery_image) {
                $this->deleteFile($project->gallery_image);
            }
            $validated['gallery_image'] = null;
        } else {
            unset($validated['gallery_image']);
        }

        // Handle Gallery Images
        // The 'images' field can contain a mix of strings (existing URLs) and UploadedFile objects (new uploads).
        // We need to:
        // 1. Identify kept existing images.
        // 2. Identify removed existing images and delete them from storage.
        // 3. Upload new images.
        // 4. Merge kept existing images and new uploaded images.

        $currentImages = $project->images ?? [];
        $newImagesList = $request->input('images', []); // This will contain strings (kept images)
        if (!is_array($newImagesList)) $newImagesList = [];
        
        // Filter out non-string values from input (files are not in input() usually, but let's be safe)
        $keptImages = array_filter($newImagesList, function($item) {
            return is_string($item);
        });

        // Find images to delete (present in current but not in kept)
        $imagesToDelete = array_diff($currentImages, $keptImages);
        foreach ($imagesToDelete as $imageToDelete) {
            $this->deleteFile($imageToDelete);
        }

        // Handle new file uploads
        $finalImages = array_values($keptImages); // Reset keys
        if ($request->hasFile('images')) {
            foreach ($request->file('images') as $image) {
                $finalImages[] = $this->uploadFile($image, 'projects/gallery');
            }
        }

        $validated['images'] = $finalImages;

        $project->update($validated);

        return redirect()->route('admin.projects.index')->with('success', 'Project updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Project $project)
    {
        if ($project->thumbnail) {
            $this->deleteFile($project->thumbnail);
        }
        // Also delete gallery images if needed

        $project->delete();
        return redirect()->route('admin.projects.index')->with('success', 'Project deleted successfully.');
    }

    public function generate(Request $request, GeminiService $geminiService)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'images' => 'nullable|array',
            'images.*' => 'image|max:10240', // 10MB max per image
        ]);

        try {
            $data = $geminiService->generateProjectDetails(
                $request->input('title'),
                $request->file('images') ?? []
            );

            return response()->json([
                'success' => true,
                'data' => $data
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => $e->getMessage()
            ], 500);
        }
    }

    public function generateImage(Request $request, GeminiService $geminiService)
    {
        $request->validate([
            'prompt' => 'required|string|max:1000',
        ]);

        try {
            $base64Image = $geminiService->generateImage($request->input('prompt'));

            return response()->json([
                'success' => true,
                'image' => 'data:image/png;base64,' . $base64Image
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => $e->getMessage()
            ], 500);
        }
    }
}
