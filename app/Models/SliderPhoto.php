<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class SliderPhoto extends Model
{
    protected $connection = 'mysql';
    protected $table = 'slider';
    protected $fillable = [
        'file_name_1',
        'file_hash_1,',
        'file_name_2',
        'file_hash_2',
        'file_name_3',
        'file_hash_3',
        'register_at'
    ];
}