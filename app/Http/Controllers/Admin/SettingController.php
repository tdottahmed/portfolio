<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Setting;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SettingController extends Controller
{
    use \App\Traits\FileUploadTrait;

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
            // If payload is an array (like 'hero', 'about'), we need to check for files inside
            if (is_array($payload)) {
                $currentSetting = Setting::where('key', $key)->first();
                $currentPayload = $currentSetting ? $currentSetting->payload : [];

                foreach ($payload as $field => $value) {
                    if ($request->hasFile("{$key}.{$field}")) {
                        // Upload new file
                        $oldFile = $currentPayload[$field] ?? null;
                        // If oldFile is not a path (e.g. empty), pass null
                        if ($oldFile && !is_string($oldFile)) $oldFile = null;
                        
                        $payload[$field] = $this->uploadFile($request->file("{$key}.{$field}"), "settings/{$key}", $oldFile);
                    } elseif ($value === null && isset($currentPayload[$field])) {
                         // If value is null, it might mean we want to keep the old value OR it was not sent?
                         // In Inertia with FormData, if we don't send a file, we might send the old string or null.
                         // If we send null, it usually means "no change" or "cleared".
                         // But if we use ImageUploader, we send the file if changed.
                         // If we don't change it, we might send the old URL string.
                         // If we want to remove it, we might send empty string or null?
                         
                         // Let's assume:
                         // - File object: New upload
                         // - String: Keep existing (it's the URL)
                         // - Null: ?
                         
                         // If the frontend sends the existing URL as a string, we just save it.
                         // If the frontend sends a File, we upload it.
                    }
                }
            }
            
            Setting::updateOrCreate(
                ['key' => $key],
                ['payload' => $payload]
            );
        }

        return redirect()->back()->with('success', 'Settings updated successfully.');
    }
}
