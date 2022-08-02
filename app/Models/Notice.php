<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Notice extends Model
{
    protected $connection = 'mysql';
    protected $table = 'notice';
    protected $fillable = [
    
        'title',
        'contents',
        'file_name',
        'file_hash,',
        'register_at'
    ];
}