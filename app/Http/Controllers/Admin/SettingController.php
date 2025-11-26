<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Setting;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SettingController extends Controller
{
    /**
     * Show the form for editing the settings.
     */
    public function edit()
    {
        $settings = Setting::all()->pluck('payload', 'key');

        return Inertia::render('Admin/Settings/Edit', [
            'settings' => $settings
        ]);
    }

    /**
     * Update the settings in storage.
     */
    public function update(Request $request)
    {
        $data = $request->all();

        foreach ($data as $key => $payload) {
            Setting::updateOrCreate(
                ['key' => $key],
                ['payload' => $payload]
            );
        }

        return redirect()->back()->with('success', 'Settings updated successfully.');
    }
}
