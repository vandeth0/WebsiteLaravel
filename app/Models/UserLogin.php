<?php 

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class UserLogin extends Model{
  protected $connection = 'mysql';
  protected $table = 'user';
  protected $fillable = [
    'user_id',
    'user_pwd',
    
  ];
}