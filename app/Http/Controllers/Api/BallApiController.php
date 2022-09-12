<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\BallList;
use Illuminate\Http\Request;

class BallApiController extends Controller
{

  public function createdBallApi(Request $request)
  {
    $postData = $request->input('data');
    $url = "https://l639.net/api/request/winNum?roundNo=$postData";

    $curl = curl_init($url);
    curl_setopt($curl, CURLOPT_URL, $url);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);

    //for debug only!
    curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, false);
    curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);

    $resp = curl_exec($curl);
    // curl_close($curl);
    // var_dump($resp);
    return $resp;
    
  }
  
  public function ballApiResult()
  {
    $readQuery = BallList::orderBy('weekly', 'DESC')->get();
    return $readQuery;
  }

}