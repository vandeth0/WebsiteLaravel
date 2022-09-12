<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class TestingController extends Controller
{
    public function index()
    {
        //Query Builder
        $result = \DB::table('qna')->get();
        dd($result);
    }

}
