<?php

namespace App\Http\Controllers;

use App\Models\Message;
use Illuminate\Http\Request;

class ContactController extends Controller
{
    public function index()
    {
        $settings = \App\Models\Setting::all()->pluck('payload', 'key');
        return \Inertia\Inertia::render('Contact', [
            'settings' => $settings
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'message' => 'required|string',
        ]);

        Message::create($validated);

        return redirect()->back()->with('success', 'Message sent successfully!');
    }
}
