<?php 

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class BallList extends Model{
  protected $connection = 'mysql';
  protected $table = 'balllist';
  protected $fillable = [
    'date_draw',
    'num1',
    'num2',
    'num3',
    'num4',
    'num5',
    'num6',
    'bonus',
    'weekly',
  ];
}