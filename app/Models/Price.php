<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Price extends Model
{
	public function getPrices()
	{
		$prices = $this -> get();
		
		return $prices;
	}
}