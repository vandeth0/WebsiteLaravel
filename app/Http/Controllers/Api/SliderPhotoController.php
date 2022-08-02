<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\SliderPhoto;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class SliderPhotoController extends Controller
{
    public function createdSliderPhoto(Request $request)
    {
           
        $file_name_1 = $request->input('file_name_1');
        $file_hash_1 = $file_name_1 ? hash('sha256', date('YmdHis') . $file_name_1) : '';
        $file_name_2 = $request->input('file_name_2');
        $file_hash_2 = $file_name_2 ? hash('sha256', date('YmdHis') . $file_name_2) : '';
        $file_name_3 = $request->input('file_name_3');
        $file_hash_3 = $file_name_3 ? hash('sha256', date('YmdHis') . $file_name_3) : '';
        $file1 = $request->file('file1');
        $file2 = $request->file('file2');
        $file3 = $request->file('file3');
        
        

        $updateData = SliderPhoto::where('id', '6')->first();
        $updateData->register_at = date('Y-m-d');
        if (!empty($file1) && !empty($file2) && !empty($file3)) {
            Storage::delete("public/SliderPhoto/$updateData->file_hash_1");
            Storage::putFileAs('public/SliderPhoto', $file1, $file_hash_1);
            Storage::delete("public/SliderPhoto/$updateData->file_hash_2");
            Storage::putFileAs('public/SliderPhoto', $file2, $file_hash_2);
            Storage::delete("public/SliderPhoto/$updateData->file_hash_3");
            Storage::putFileAs('public/SliderPhoto', $file3, $file_hash_3);
            $updateData->file_name_1 = $file_name_1;
            $updateData->file_hash_1 = $file_hash_1;
            $updateData->file_name_2 = $file_name_2;
            $updateData->file_hash_2 = $file_hash_2;
            $updateData->file_name_3 = $file_name_3;
            $updateData->file_hash_3 = $file_hash_3;
        }
        $updateData->save();

        return $updateData;
    }

    public function readSliderPhoto()
    {
      $readQuery = SliderPhoto::orderBy('created_at', 'DESC')->get();
      return $readQuery;
    }

}