<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Http\Requests;
use App\Models\Post;
use App\Models\Portfolio;
use App\Models\Price;

class RestController extends Controller
{
	public function index()
	{			
		return view('index');
	}
	
	public function getPosts(Post $postModel)
	{
		$posts = $postModel -> getPosts();
		
		return $posts;
	}
	
	public function getPost(Post $postModel, $id)
	{
		$post = $postModel -> find($id);
		
		return $post;
	}
	
	public function getPortfolio(Portfolio $portfolioModel)
	{
		$items = $portfolioModel -> getPortfolio();
		
		return $items;
	}
	
	public function getPortfolioItem(Portfolio $portfolioModel, $id)
	{
		$item = $portfolioModel -> find($id);
		
		return $item;
	}
	
	public function getPrices(Price $priceModel)
	{
		$prices = $priceModel -> getPrices();
		
		return $prices;
	}
	
	public function order(Request $request)
	{
		$data = $request -> all();
		$services = '';

		if($data['services'])
		{	
			for($i = 0; $i < count($data['services']); $i++)
			{
				$services.= $data['services'][$i].', ';
			}
		}

		$message = 'Имя: '.$data['name']."\r\n".'Телефон: '.$data['phone']."\r\n".'E-mail: '.$data['email']."\r\n".
								'Стоимость: '.$data['cost']."\r\n".'Проект: '.$data['project']."\r\n".'Услуги: '.$services."\r\n";

		SendEmail('likearts.ru', 'atellmer@gmail.com', 'Новый заказ!', $message);
	}
	
	public function phone(Request $request)
	{
		$data = $request -> all();

		$message = 'Имя: '.$data['name']."\r\n".'Телефон: '.$data['phone']."\r\n";

		SendEmail('likearts.ru', 'atellmer@gmail.com', 'Заказ звонка!', $message);
	}
}


function SendEmail($from, $to, $subject, $message) {
	$headers = 
	'From: '.$from.'@'. $_SERVER['HTTP_HOST'] . "\r\n" .
	'Reply-To: '.$from.'@'. $_SERVER['HTTP_HOST'] . "\r\n" .
	'X-Mailer: PHP/' . phpversion();

	mail($to, $subject, $message, $headers);
}