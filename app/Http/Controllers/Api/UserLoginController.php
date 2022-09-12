<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\UserLogin;
use Illuminate\Http\Request;
use SebastianBergmann\Environment\Console;

class UserLoginController extends Controller
{

  public function readUserLogin()
  {
    $readQuery = UserLogin::orderBy('created_at', 'DESC')->get();
    return $readQuery;
  }

  public function postURL(Request $request)
  {
    $postData = $request->input('data');
    // $ch = curl_init();

    // curl_setopt($ch, CURLOPT_URL,"https://l639.net/api/request/qrCheck");
    // curl_setopt($ch, CURLOPT_POST, 1);
    // curl_setopt($ch, CURLOPT_POSTFIELDS,"ticketNo=$postData");

    // // In real life you should use something like:
    // // curl_setopt($ch, CURLOPT_POSTFIELDS, 
    // //          http_build_query(array('ticketNo' => '$postData')));

    // // Receive server response ...
    // curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

    // $server_output = curl_exec($ch);

    // curl_close ($ch);
    // return $server_output;

    $url = "https://l639.net/api/request/qrCheck?ticketNo=$postData";

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

}