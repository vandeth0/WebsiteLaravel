<?php 

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Qna extends Model{
  protected $connection = 'mysql';
  protected $table = 'qna';
  protected $fillable = [
    'comment'
  ];
}