<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Qna;
use Illuminate\Http\Request;

class TestController extends Controller
{
  public function createdQNA(Request $request)
  {
    $addData = $request->input('addData');
    $insertQuery = new Qna();
    $insertQuery->comment = $addData;
    $insertQuery->save();
    return $insertQuery;
  }

  public function readTestData()
  {
    $readQuery = Qna::orderBy('created_at', 'DESC')->get();
    return $readQuery;
  }


}