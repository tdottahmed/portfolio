<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    protected $guarded = [];

    protected $casts = [
        'images' => 'array',
        'technologies' => 'array',
        'features' => 'array',
        'achievements' => 'array',
        'links' => 'array',
        'timeline' => 'array',
        'featured' => 'boolean',
    ];
    //
}
