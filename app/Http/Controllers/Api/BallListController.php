<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\BallList;
use Illuminate\Http\Request;

class BallListController extends Controller
{
  public function createdBallList(Request $request)
  {
    $num1 = $request->input('num1');
    $num2 = $request->input('num2');
    $num3 = $request->input('num3');
    $num4 = $request->input('num4');
    $num5 = $request->input('num5');
    $num6 = $request->input('num6');
    $bonus = $request->input('bonus');
    $dateDraw = $request->input('date_draw');
    $weekly = $request->input('weekly');

    $insertData = new BallList();
    $insertData->num1 = $num1;
    $insertData->num2 = $num2;
    $insertData->num3 = $num3;
    $insertData->num4 = $num4;
    $insertData->num5 = $num5;
    $insertData->num6 = $num6;
    $insertData->bonus = $bonus;
    $insertData->date_draw = $dateDraw;
    $insertData->weekly = $weekly;
    $insertData->save();

    return $insertData;
  }

  public function readBallListOut()
  {
    $readQuery = BallList::orderBy('created_at', 'DESC')->get();
    return $readQuery;
  }

}