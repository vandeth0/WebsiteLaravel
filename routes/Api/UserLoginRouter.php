<?php

Route::group(['prefix' => '/UserLogin', 'namespace' => 'Api'], function () {
    Route::match(['get', 'post'], '/post', 'UserLoginController@postURL');
    Route::match(['get', 'post'], '/read', 'UserLoginController@readUserLogin');
    // Route::match(['get', 'post'], '/updated', 'GalleryController@updatedGallery');
    // Route::match(['get', 'post'], '/deleted', 'GalleryController@deletedGallery');
});
