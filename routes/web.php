<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', \App\Http\Controllers\HomeController::class)->name('home');
Route::get('/about', \App\Http\Controllers\AboutController::class)->name('about');
Route::get('/services', [\App\Http\Controllers\ServiceController::class, 'index'])->name('services.index');
Route::get('/contact', [\App\Http\Controllers\ContactController::class, 'index'])->name('contact.index');
Route::post('/contact', [\App\Http\Controllers\ContactController::class, 'store'])->name('contact.store');

Route::get('/projects', [\App\Http\Controllers\ProjectController::class, 'index'])->name('projects.index');
Route::get('/projects/{project:slug}', [\App\Http\Controllers\ProjectController::class, 'show'])->name('projects.show');
Route::get('/blog', [\App\Http\Controllers\PostController::class, 'index'])->name('posts.index');
Route::get('/blog/{post:slug}', [\App\Http\Controllers\PostController::class, 'show'])->name('posts.show');

Route::get('/dashboard', function () {
    return Inertia::render('Admin/Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware(['auth', 'verified'])->prefix('admin')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::resource('messages', \App\Http\Controllers\Admin\MessageController::class)->only(['index', 'show', 'destroy'])->names('admin.messages');

    Route::resource('projects', \App\Http\Controllers\Admin\ProjectController::class)->names('admin.projects');
    Route::resource('skills', \App\Http\Controllers\Admin\SkillController::class)->names('admin.skills');
    Route::resource('services', \App\Http\Controllers\Admin\ServiceController::class)->names('admin.services');
    Route::resource('experiences', \App\Http\Controllers\Admin\ExperienceController::class)->names('admin.experiences');
    Route::resource('education', \App\Http\Controllers\Admin\EducationController::class)->names('admin.education');
    Route::resource('testimonials', \App\Http\Controllers\Admin\TestimonialController::class)->names('admin.testimonials');
    Route::resource('posts', \App\Http\Controllers\Admin\PostController::class)->names('admin.posts');
    
    Route::get('/settings', [\App\Http\Controllers\Admin\SettingController::class, 'edit'])->name('admin.settings.edit');
    Route::put('/settings', [\App\Http\Controllers\Admin\SettingController::class, 'update'])->name('admin.settings.update');
});

require __DIR__.'/auth.php';
