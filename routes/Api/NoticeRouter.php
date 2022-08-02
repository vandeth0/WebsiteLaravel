<?php

Route::group(['prefix' => '/Notice', 'namespace' => 'Api'], function () {
    Route::match(['get', 'post'], '/created', 'NoticeController@createdNotice');
    Route::match(['get', 'post'], '/read', 'NoticeController@readNotice');
    Route::match(['get', 'post'], '/updated', 'NoticeController@updatedNotice');
    Route::match(['get', 'post'], '/deleted', 'NoticeController@deletedNotice');
});
