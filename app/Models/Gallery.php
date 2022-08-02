<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Gallery extends Model
{
    protected $connection = 'mysql';
    protected $table = 'gallery';
    protected $fillable = [
        'title',
        'contents',
        'file_name',
        'file_hash,',
        'register_at'
    ];
}