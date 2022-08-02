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
    $ch = curl_init();

    curl_setopt($ch, CURLOPT_URL,"http://l639.net/api/request/qrCheck");
    curl_setopt($ch, CURLOPT_POST, 1);
    curl_setopt($ch, CURLOPT_POSTFIELDS,"ticketNo=$postData");

    // In real life you should use something like:
    // curl_setopt($ch, CURLOPT_POSTFIELDS, 
    //          http_build_query(array('ticketNo' => '$postData')));

    // Receive server response ...
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

    $server_output = curl_exec($ch);

    curl_close ($ch);
    // var_dump(json_decode($server_output));
    
    
    return $server_output;
  }

}