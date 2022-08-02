<?php

Route::group(['prefix' => '/Video', 'namespace' => 'Api'], function () {
    Route::match(['get', 'post'], '/created', 'VideoController@createdVideo');
    Route::match(['get', 'post'], '/read', 'VideoController@readVideo');
});
