<?php

namespace App\Traits;

use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

trait FileUploadTrait
{
    /**
     * Upload a file to the specified directory.
     *
     * @param UploadedFile $file
     * @param string $directory
     * @param string|null $oldFile
     * @return string
     */
    public function uploadFile(UploadedFile $file, string $directory = 'uploads', ?string $oldFile = null): string
    {
        // Delete old file if it exists
        if ($oldFile) {
            $this->deleteFile($oldFile);
        }

        $filename = Str::random(40) . '.' . $file->getClientOriginalExtension();
        $path = $file->storeAs($directory, $filename, 'public');

        return '/storage/' . $path;
    }

    /**
     * Delete a file from storage.
     *
     * @param string $path
     * @return bool
     */
    public function deleteFile(string $path): bool
    {
        if (!$path) {
            return false;
        }

        // Remove '/storage/' from the path to get the relative path for Storage facade
        $relativePath = str_replace('/storage/', '', $path);

        if (Storage::disk('public')->exists($relativePath)) {
            return Storage::disk('public')->delete($relativePath);
        }

        return false;
    }
}
