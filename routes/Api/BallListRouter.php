<?php

Route::group(['prefix' => '/BallList', 'namespace' => 'Api'], function () {
    Route::match(['get', 'post'], '/created', 'BallListController@createdBallList');
    Route::match(['get', 'post'], '/read', 'BallListController@readBallListOut');
});