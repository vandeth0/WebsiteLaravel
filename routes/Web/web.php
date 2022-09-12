<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::group(['prefix' => '/print'], function () {
    Route::group(['prefix' => '/qr', 'namespace' => 'Api\Popup\PanelQR'], function () {
        Route::view('/material', 'Print/Qr/MaterialQr');
        Route::match(['get', 'post'], '/panel', 'PanelQRController@readPanelQR');
    });
    Route::group(['prefix' => '/label'], function () {
        Route::view('/material', 'Print/Label/MaterialLabel');
    });
    Route::group(['prefix' => '/order'], function () {
        Route::view('/productionrequest', 'Print/Order/ProductionRequest');
    });
});

Route::view('/{page?}', 'index')->where('page', '.*');
Route::view('/paycamLotto639/{page?}', 'index')->where('page', '.*');
Route::view('/winningresults/{page?}', 'index')->where('page', '.*');
Route::view('/community/{page?}', 'index')->where('page', '.*');
Route::view('/loveinus/{page?}', 'index')->where('page', '.*');

Route::view('/Khmer/winningresults/{page?}', 'index')->where('page', '.*');
Route::view('/Khmer/paycamLotto639{page?}', 'index')->where('page', '.*');
Route::view('/Khmer/community/{page?}', 'index')->where('page', '.*');
Route::view('/Khmer/loveinus/{page?}', 'index')->where('page', '.*');


// Route::get('/home','TestingController@index');


// Route::get('/', function () {
//     return view('website');
// });
// Route::get('/example', function () {
//     return view('website');
// });
// Route::match(['get', 'post'], '/test123', function() {
//     return 'Test12345';
// });

// Route::any('/test12', function(){
//     return 'Anythings';
// });
// Route::redirect('/here', 'there');
// Route::view('/welcome', 'website');

// Route::get('user/{page}', function ($page){
//     return 'This is page number: '.$page;
// });
// Route::get('user/{page}', function ($page){
//     return 'This is page number: '.$page;
// });












