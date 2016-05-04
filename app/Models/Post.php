<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Carbon\Carbon;

class Post extends Model
{ 
	public function getPosts()
	{
		$posts = $this
					-> latest('published_at')
					-> get();
		
		return $posts;
	}
}