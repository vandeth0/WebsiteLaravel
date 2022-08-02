<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Notice;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class NoticeController extends Controller
{
    public function createdNotice(Request $request)
    {
        $title = $request->input('title');
        $contents = $request->input('contents');
        $file_name = $request->input('file_name');
        $file_hash = $file_name ? hash('sha256', date('YmdHis') . $file_name) : '';
        $file = $request->file('file');
        if (!empty($file)) {
            Storage::putFileAs('public/Notice', $file, $file_hash);
        }

        $insertData = new Notice();
        $insertData->title = $title;
        $insertData->contents = $contents;
        $insertData->file_name = $file_name;
        $insertData->file_hash = $file_hash;
        $insertData->register_at = date('Y-m-d');  
        $insertData->save();

        return $insertData;
    }

    public function updatedNotice(Request $request)
    {
        $id = $request->input('id');
        $title = $request->input('title');
        $contents = $request->input('contents');
        $file_name = $request->input('file_name');
        $file_hash = $file_name ? hash('sha256', date('YmdHis') . $file_name) : '';
        $file = $request->file('file');
        
        $updateData = Notice::where('id', $id)->first();
        $updateData->title = $title;
        $updateData->contents = $contents;
        
        if (!empty($file)) {
            Storage::delete("public/Notice/$updateData->file_hash");
            Storage::putFileAs('public/Notice', $file, $file_hash);
            $updateData->file_name = $file_name;
            $updateData->file_hash = $file_hash;
        }
        $updateData->save();
    }


    public function readNotice()
    {
      $readQuery = Notice::orderBy('created_at', 'DESC')->get();
      return $readQuery;
    }

    public function deletedNotice(Request $request)
    {
        $delItem = $request->input('delItem');
        Notice::where('id', $delItem['id'])->forceDelete();
        Storage::delete("public/Notice/".$delItem['file_hash']);
    }
}