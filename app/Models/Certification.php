<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Certification extends Model
{
    protected $guarded = [];

    protected $casts = [
        'skills' => 'array',
        'issue_date' => 'date',
        'expiry_date' => 'date',
    ];
    //
}
