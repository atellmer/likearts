<?php


Route::get('/', ['as' => 'root', 'uses' => 'RestController@index']);
Route::get('getposts', ['as' => 'posts.get', 'uses' => 'RestController@getPosts']);
Route::get('getpost/{id}', ['as' => 'post.get', 'uses' => 'RestController@getPost']);
Route::get('getportfolio', ['as' => 'portfolio.get', 'uses' => 'RestController@getPortfolio']);
Route::get('getportfolio/{id}', ['as' => 'portfolioItem.get', 'uses' => 'RestController@getPortfolioItem']);
Route::get('getprices', ['as' => 'prices.get', 'uses' => 'RestController@getPrices']);
Route::post('order', ['as' => 'order.post', 'uses' => 'RestController@order']);
Route::post('phone', ['as' => 'phone.post', 'uses' => 'RestController@phone']);

Route::any('{path?}', function() {
	return File::get(public_path() . '/client/index.php');
})->where("path", ".+");