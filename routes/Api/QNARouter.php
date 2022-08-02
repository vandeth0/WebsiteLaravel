<?php

Route::group(['prefix' => '/QnA', 'namespace' => 'Api'], function () {
    Route::match(['get', 'post'], '/created', 'QNAController@createdQNA');
    Route::match(['get', 'post'], '/read', 'QNAController@readQNA');
});