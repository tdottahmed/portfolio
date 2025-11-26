<?php

namespace App\Http\Controllers;

use App\Models\Service;
use App\Models\Testimonial;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ServiceController extends Controller
{
    public function index()
    {
        $services = Service::all();
        $testimonials = Testimonial::latest()->take(5)->get();

        return Inertia::render('Services/Index', [
            'services' => $services,
            'testimonials' => $testimonials,
        ]);
    }
}
