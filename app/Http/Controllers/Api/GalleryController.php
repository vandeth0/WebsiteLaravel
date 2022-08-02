<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Gallery;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class GalleryController extends Controller
{
    public function createdGallery(Request $request)
    {
        $title = $request->input('title');
        $contents = $request->input('contents');
        $file_name = $request->input('file_name');
        $file_hash = $file_name ? hash('sha256', date('YmdHis') . $file_name) : '';
        $file = $request->file('file');
        if (!empty($file)) {
            Storage::putFileAs('public/Gallery', $file, $file_hash);
        }

        $insertData = new Gallery();
        $insertData->title = $title;
        $insertData->contents = $contents;
        $insertData->file_name = $file_name;
        $insertData->file_hash = $file_hash;
        $insertData->register_at = date('Y-m-d');
        $insertData->save();

        return $insertData;
    }
    

    public function readGallery()
    {
      $readQuery = Gallery::orderBy('created_at', 'DESC')->get();
      return $readQuery;
    }

}