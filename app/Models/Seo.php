<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Seo extends Model
{
    public function getSeo()
	{
		$seo = $this -> get();
		
		return $seo;
	}
}
