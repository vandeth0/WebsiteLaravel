<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\LocationDealer;
use Illuminate\Http\Request;

class LocationDealerController extends Controller
{

  // public function createdLocation(Request $request)
  // {
  //   $addData = $request->input('addData');
  //   $insertQuery = new LocationDealer();
  //   $insertQuery->store_id = $addData;
  //   $insertQuery->save();
  //   return $insertQuery;
  // }



  public function readLocation()
  {
    $readQuery = LocationDealer::orderBy('id', 'DESC')->get();
    return $readQuery;
  }
  public function deletedLocation(Request $request)
  {
      $delItem = $request->input('delItem');
      LocationDealer::where('id', $delItem['id'])->forceDelete();
  }

  

  public function createdLocation(Request $request)
  {
      $storeId = $request->input('storeId');
      $shopName = $request->input('shopName');
      $nameDealer = $request->input('nameDealer');
      $phone = $request->input('phone');
      $lat = $request->input('lat');
      $lng = $request->input('lng');

      $insertData = new LocationDealer();
      $insertData->store_id = $storeId;
      $insertData->shop_name = $shopName;
      $insertData->name_dealer = $nameDealer;
      $insertData->phone = $phone;
      $insertData->lat = $lat;
      $insertData->lng = $lng;
      $insertData->save();

      return $insertData;
  }

  public function updatedLocation(Request $request)
  {
      $id = $request->input('id');
      $storeId = $request->input('storeId');
      $shopName = $request->input('shopName');
      $nameDealer = $request->input('nameDealer');
      $phone = $request->input('phone');
      $lat = $request->input('lat');
      $lng = $request->input('lng');
      
      $updateData = LocationDealer::where('id', $id)->first();
      $updateData->store_id = $storeId;
      $updateData->shop_name = $shopName;
      $updateData->name_dealer = $nameDealer;
      $updateData->phone = $phone;
      $updateData->lat = $lat;
      $updateData->lng = $lng;
      
      
      $updateData->save();
  }

}