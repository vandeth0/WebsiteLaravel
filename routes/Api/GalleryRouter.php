<?php

Route::group(['prefix' => '/Gallery', 'namespace' => 'Api'], function () {
    Route::match(['get', 'post'], '/created', 'GalleryController@createdGallery');
    Route::match(['get', 'post'], '/read', 'GalleryController@readGallery');
    Route::match(['get', 'post'], '/updated', 'GalleryController@updatedGallery');
    Route::match(['get', 'post'], '/deleted', 'GalleryController@deletedGallery');
});
