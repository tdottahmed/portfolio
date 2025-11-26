<?php

namespace App\Http\Controllers;

use App\Models\Project;
use App\Models\Skill;
use App\Models\Service;
use App\Models\Experience;
use App\Models\Education;
use App\Models\Testimonial;
use App\Models\Post;
use App\Models\Setting;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        // Fetch all necessary data for the landing page
        $settings = Setting::all()->pluck('payload', 'key');

        $projects = Project::latest()
            ->take(6)
            ->get();

        $skills = Skill::all()->groupBy('category');

        $services = Service::all();

        $experiences = Experience::orderBy('start_date', 'desc')->get();

        $education = Education::orderBy('start_date', 'desc')->get();

        $testimonials = Testimonial::latest()->take(5)->get();

        $posts = Post::where('published_at', '<=', now())
            ->latest()
            ->take(3)
            ->get();

        return Inertia::render('Home', [
            'settings' => $settings,
            'projects' => $projects,
            'skills' => $skills,
            'services' => $services,
            'experiences' => $experiences,
            'education' => $education,
            'testimonials' => $testimonials,
            'posts' => $posts,
        ]);
    }
}
