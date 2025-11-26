<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PostController extends Controller
{
    public function index()
    {
        $posts = Post::where('published_at', '<=', now())->latest()->get();
        return Inertia::render('Posts/Index', ['posts' => $posts]);
    }

    public function show(Post $post)
    {
        return Inertia::render('Posts/Show', ['post' => $post]);
    }
}
