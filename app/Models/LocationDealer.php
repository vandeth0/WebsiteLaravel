<?php 

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class LocationDealer extends Model{
  protected $connection = 'mysql';
  protected $table = 'location';
  protected $fillable = [
    'store_id',
    'shop_name',
    'phone',
    'name_dealer',
    'lat',
    'lng',
  ];
}