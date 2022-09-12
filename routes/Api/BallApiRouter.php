<?php

Route::group(['prefix' => '/BallApi', 'namespace' => 'Api'], function () {
    Route::match(['get', 'post'], '/post', 'BallApiController@createdBallApi');
    Route::match(['get', 'post'], '/read', 'BallApiController@ballApiResult');
});