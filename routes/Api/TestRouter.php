<?php

Route::group(['prefix' => '/TestData', 'namespace' => 'Api'], function () {
    Route::match(['get', 'post'], '/created', 'TestController@createdQNA');
    Route::match(['get', 'post'], '/read', 'TestController@readTestData');
});