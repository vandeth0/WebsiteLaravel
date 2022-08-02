<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Video extends Model
{
    protected $connection = 'mysql';
    protected $table = 'video';
    protected $fillable = [
        'title',
        'contents',
        'file_name',
        'file_hash,',
        'register_at'
    ];
}