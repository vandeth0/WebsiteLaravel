<?php 

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class BallApi extends Model{
  protected $connection = 'mysql';
  protected $table = 'ballapi';
  protected $fillable = [
    'weekly',
  ];
}