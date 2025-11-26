<?php

namespace App\Http\Controllers;

use App\Models\Setting;
use App\Models\Experience;
use App\Models\Education;
use App\Models\Skill;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AboutController extends Controller
{
    public function __invoke(Request $request)
    {
        $settings = Setting::all()->pluck('payload', 'key');
        $experiences = Experience::orderBy('start_date', 'desc')->get();
        $education = Education::orderBy('start_date', 'desc')->get();
        $skills = Skill::all()->groupBy('category');

        return Inertia::render('About', [
            'settings' => $settings,
            'experiences' => $experiences,
            'education' => $education,
            'skills' => $skills,
        ]);
    }
}
