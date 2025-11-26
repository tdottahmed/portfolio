<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Experience extends Model
{
    protected $guarded = [];

    protected $casts = [
        'achievements' => 'array',
        'technologies' => 'array',
        'highlights' => 'array',
        'current' => 'boolean',
        'start_date' => 'date',
        'end_date' => 'date',
    ];
    //
}
