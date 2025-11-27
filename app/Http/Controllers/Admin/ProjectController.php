<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Project;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Str;

use App\Traits\FileUploadTrait;

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
        // Note: For file uploads with Inertia using PUT/PATCH, we often need to use POST with _method="PUT"
        // or handle it carefully. Inertia's useForm handles this if we don't force PUT.
        // However, standard HTML forms don't support PUT for file uploads.
        // Best practice with Inertia is to use POST with _method: 'put' in the data, or just POST to a specific update-with-files route.
        // But Laravel resource route expects PUT/PATCH.
        // Let's assume the frontend sends POST with _method: 'put'.

        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'subtitle' => 'nullable|string|max:255',
            'category' => 'nullable|string|max:255',
            'description' => 'nullable|string',
            'long_description' => 'nullable|string',
            'thumbnail' => 'nullable', // Could be string (old URL) or file (new upload)
            'images' => 'nullable|array',
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
}
