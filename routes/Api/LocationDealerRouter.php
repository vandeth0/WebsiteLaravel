<?php

Route::group(['prefix' => '/LocationDealer', 'namespace' => 'Api'], function () {
    Route::match(['get', 'post'], '/created', 'LocationDealerController@createdLocation');
    Route::match(['get', 'post'], '/read', 'LocationDealerController@readLocation');
    Route::match(['get', 'post'], '/deleted', 'LocationDealerController@deletedLocation');
    Route::match(['get', 'post'], '/updated', 'LocationDealerController@updatedLocation');
});