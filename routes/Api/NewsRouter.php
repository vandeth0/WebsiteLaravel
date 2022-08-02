<?php

Route::group(['prefix' => '/News', 'namespace' => 'Api'], function () {
    Route::match(['get', 'post'], '/created', 'NewsController@createdNews');
    Route::match(['get', 'post'], '/read', 'NewsController@readNews');
    Route::match(['get', 'post'], '/updated', 'NewsController@updatedNews');
    Route::match(['get', 'post'], '/deleted', 'NewsController@deletedNews');
});
