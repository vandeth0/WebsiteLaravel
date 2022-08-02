<?php

Route::group(['prefix' => '/SliderPhoto', 'namespace' => 'Api'], function () {
    Route::match(['get', 'post'], '/created', 'SliderPhotoController@createdSliderPhoto');
    Route::match(['get', 'post'], '/read', 'SliderPhotoController@readSliderPhoto');
});
