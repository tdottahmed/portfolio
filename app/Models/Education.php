<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Education extends Model
{
    protected $guarded = [];

    protected $casts = [
        'relevant_coursework' => 'array',
        'projects' => 'array',
        'start_date' => 'date',
        'end_date' => 'date',
    ];
    //
}
