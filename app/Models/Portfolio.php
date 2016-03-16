<?php

namespace App\Models;
use Illuminate\Database\Eloquent\Model;

class Portfolio extends Model
{ 
	public function getPortfolio()
	{
		$items = $this -> get();
		
		return $items;
	}
}