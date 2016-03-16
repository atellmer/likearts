<?php

use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;
use App\Models\Post;


class DatabaseSeeder extends Seeder
{
    public function run()
    {
        Model::unguard();
        $this->call('PostSeeder');
        Model::reguard();
    }
}



class PostSeeder extends Seeder
{
    public function run()
    {
        DB::table('posts')->delete();
        Post::create([
            'title' => 'First Post',
            'image_anonce' => 'images/posts/anonce/1.jpg',
			'image_detail' => 'images/posts/detail/1.jpg',
            'text_anonce' => 
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean rhoncus purus vel libero rhoncus, ut volutpat neque 	tempus. Aliquam convallis erat ac venenatis maximus. Sed luctus tellus augue, ut ultrices risus elementum a. Nam sodales volutpat tellus a ultricies. Aliquam placerat tincidunt orci, nec commodo turpis porta ac. Mauris ac consectetur sem, vel consectetur mi. Praesent faucibus arcu ut arcu condimentum, a posuere elit suscipit. In volutpat lorem quis dapibus porttitor. Duis a lectus iaculis, malesuada mi non, malesuada eros. Sed euismod lorem eget dolor tristique, eget fermentum erat ullamcorper. Integer mollis ac est quis dignissim.',
            'text_detail' => 
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean rhoncus purus vel libero rhoncus, ut volutpat neque tempus. Aliquam convallis erat ac venenatis maximus. Sed luctus tellus augue, ut ultrices risus elementum a. Nam sodales volutpat tellus a ultricies. Aliquam placerat tincidunt orci, nec commodo turpis porta ac. Mauris ac consectetur sem, vel consectetur mi. Praesent faucibus arcu ut arcu condimentum, a posuere elit suscipit. In volutpat lorem quis dapibus porttitor. Duis a lectus iaculis, malesuada mi non, malesuada eros. Sed euismod lorem eget dolor tristique, eget fermentum erat ullamcorper. Integer mollis ac est quis dignissim. Nulla faucibus, est id elementum ornare, ipsum elit consectetur nisl, sed volutpat felis dui et libero. Integer varius, ligula sed tincidunt commodo, metus purus tincidunt nisl, vel condimentum justo quam vel libero. Phasellus pellentesque hendrerit diam sed tempus. Maecenas facilisis in urna id tincidunt. In auctor semper eros, a vehicula diam dapibus id. Sed sodales nibh eu ipsum egestas, sit amet mattis ipsum euismod. Phasellus maximus lectus lorem, eu porttitor sapien ornare sagittis. In viverra tortor sed tortor commodo faucibus vitae non elit. Praesent lacinia ornare lectus at imperdiet.',
            'published_at' => DB::raw('CURRENT_TIMESTAMP')
            ]);

        Post::create([
            'title' => 'Second Post',
            'image_anonce' => 'images/posts/anonce/2.jpg',
			'image_detail' => 'images/posts/detail/2.jpg',
            'text_anonce' => 
						'Vivamus dictum velit vel libero laoreet, nec egestas lorem dignissim. Pellentesque ut dolor arcu. Phasellus vel velit dapibus, malesuada nibh eu, consequat lacus. Duis tempor placerat lectus eu imperdiet. Pellentesque et urna egestas, facilisis mauris vitae, posuere nisi. Sed turpis turpis, scelerisque vitae ipsum ac, consequat varius erat. Morbi in augue et odio condimentum porta. Nullam dui urna, dictum sit amet ultricies quis, rutrum nec tortor. Aenean tempor tortor a ex imperdiet venenatis. Donec ante nibh, condimentum in nunc egestas, dapibus pulvinar lorem. Maecenas tristique mauris vel metus volutpat, eu fringilla nisi accumsan. Nam ac ligula sed sem dapibus vulputate.',
            'text_detail' => 
						'Vivamus dictum velit vel libero laoreet, nec egestas lorem dignissim. Pellentesque ut dolor arcu. Phasellus vel velit dapibus, malesuada nibh eu, consequat lacus. Duis tempor placerat lectus eu imperdiet. Pellentesque et urna egestas, facilisis mauris vitae, posuere nisi. Sed turpis turpis, scelerisque vitae ipsum ac, consequat varius erat. Morbi in augue et odio condimentum porta. Nullam dui urna, dictum sit amet ultricies quis, rutrum nec tortor. Aenean tempor tortor a ex imperdiet venenatis. Donec ante nibh, condimentum in nunc egestas, dapibus pulvinar lorem. Maecenas tristique mauris vel metus volutpat, eu fringilla nisi accumsan. Nam ac ligula sed sem dapibus vulputate. Proin at ligula vulputate, bibendum lorem sed, ullamcorper turpis. In vulputate nibh vitae ornare volutpat. Cras eleifend diam nec faucibus pellentesque. Duis tincidunt dui nec purus luctus, eleifend volutpat purus hendrerit. Proin ullamcorper, nibh vel consequat lacinia, augue augue auctor tellus, eget dapibus quam magna in purus. Pellentesque feugiat leo in odio gravida, sit amet laoreet leo semper. Nullam diam lacus, posuere ut ultrices nec, sagittis ac orci. Duis lobortis, elit a luctus ultricies, felis leo semper massa, sit amet laoreet odio risus non nulla. Curabitur pellentesque ante at arcu efficitur, efficitur maximus enim elementum. Quisque bibendum porttitor lacus tempor malesuada. Nullam quis lectus purus. Morbi auctor orci sed feugiat auctor. Pellentesque pulvinar mollis efficitur.',
            'published_at' => DB::raw('CURRENT_TIMESTAMP')
            ]);
		
		 Post::create([
            'title' => 'Third Post',
            'image_anonce' => 'images/posts/anonce/3.jpg',
			'image_detail' => 'images/posts/detail/3.jpg',
            'text_anonce' => 
						'Nulla imperdiet tellus ac tortor vestibulum finibus. Interdum et malesuada fames ac ante ipsum primis in faucibus. In eget semper massa. Ut turpis turpis, molestie eget tempor in, egestas et eros. Nulla et est sed libero elementum dignissim. Ut vestibulum justo quam, at ullamcorper mauris efficitur sit amet. Sed blandit nibh nec dui viverra cursus. In convallis sapien eget turpis tristique, a condimentum massa porta. Ut purus tortor, faucibus in justo vel, egestas maximus mauris.',
            'text_detail' => 
						'Vivamus dictum velit vel libero laoreet, nec egestas lorem dignissim. Pellentesque ut dolor arcu. Phasellus vel velit dapibus, malesuada nibh eu, consequat lacus. Duis tempor placerat lectus eu imperdiet. Pellentesque et urna egestas, facilisis mauris vitae, posuere nisi. Sed turpis turpis, scelerisque vitae ipsum ac, consequat varius erat. Morbi in augue et odio condimentum porta. Nullam dui urna, dictum sit amet ultricies quis, rutrum nec tortor. Aenean tempor tortor a ex imperdiet venenatis. Donec ante nibh, condimentum in nunc egestas, dapibus pulvinar lorem. Maecenas tristique mauris vel metus volutpat, eu fringilla nisi accumsan. Nam ac ligula sed sem dapibus vulputate. Proin at ligula vulputate, bibendum lorem sed, ullamcorper turpis. In vulputate nibh vitae ornare volutpat. Cras eleifend diam nec faucibus pellentesque. Duis tincidunt dui nec purus luctus, eleifend volutpat purus hendrerit. Proin ullamcorper, nibh vel consequat lacinia, augue augue auctor tellus, eget dapibus quam magna in purus. Pellentesque feugiat leo in odio gravida, sit amet laoreet leo semper. Nullam diam lacus, posuere ut ultrices nec, sagittis ac orci. Duis lobortis, elit a luctus ultricies, felis leo semper massa, sit amet laoreet odio risus non nulla. Curabitur pellentesque ante at arcu efficitur, efficitur maximus enim elementum. Quisque bibendum porttitor lacus tempor malesuada. Nullam quis lectus purus. Morbi auctor orci sed feugiat auctor. Pellentesque pulvinar mollis efficitur.',
            'published_at' => DB::raw('CURRENT_TIMESTAMP')
            ]);
		
		 Post::create([
            'title' => 'Fourth Post',
            'image_anonce' => 'images/posts/anonce/4.jpg',
			'image_detail' => 'images/posts/detail/4.jpg',
            'text_anonce' => 
						'Etiam ut sem vel arcu eleifend rhoncus. Duis sit amet rhoncus risus. In euismod libero ut velit ultricies vulputate. Donec maximus tempus libero, ac porta neque pellentesque sit amet. Vivamus magna libero, rutrum sodales massa ut, porttitor feugiat mauris. Sed sit amet pharetra quam, vel fermentum enim. Morbi id placerat enim. Phasellus ornare tellus nec sodales ultrices. Maecenas odio dolor, tempor quis diam luctus, tristique posuere lorem. Pellentesque varius, nisl eget pulvinar tincidunt, neque neque fermentum dui, sit amet pellentesque lacus nisi a odio. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec blandit dolor posuere diam egestas accumsan. Donec velit odio, condimentum et consequat eget, pretium ac diam. Vivamus massa orci, eleifend eu facilisis ut, luctus mattis libero.',
            'text_detail' => 
						'Etiam ut sem vel arcu eleifend rhoncus. Duis sit amet rhoncus risus. In euismod libero ut velit ultricies vulputate. Donec maximus tempus libero, ac porta neque pellentesque sit amet. Vivamus magna libero, rutrum sodales massa ut, porttitor feugiat mauris. Sed sit amet pharetra quam, vel fermentum enim. Morbi id placerat enim. Phasellus ornare tellus nec sodales ultrices. Maecenas odio dolor, tempor quis diam luctus, tristique posuere lorem. Pellentesque varius, nisl eget pulvinar tincidunt, neque neque fermentum dui, sit amet pellentesque lacus nisi a odio. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec blandit dolor posuere diam egestas accumsan. Donec velit odio, condimentum et consequat eget, pretium ac diam. Vivamus massa orci, eleifend eu facilisis ut, luctus mattis libero. Morbi feugiat malesuada massa id luctus. Proin in lacus eget orci varius mollis. Aliquam tempor, arcu sed semper posuere, mauris lectus porta sem, vel suscipit ligula dolor vitae neque. Sed blandit neque eu lacinia ornare. Cras laoreet nisl diam, id dictum enim feugiat ac. Ut in rhoncus ligula. Pellentesque interdum libero eget nisl gravida consequat. Quisque dignissim enim in mi sodales mollis. Nulla facilisi. Morbi convallis finibus metus, vitae sodales arcu tincidunt tincidunt.',
            'published_at' => DB::raw('CURRENT_TIMESTAMP')
            ]);
		
		Post::create([
            'title' => 'Fifth Post',
            'image_anonce' => 'images/posts/anonce/5.jpg',
			'image_detail' => 'images/posts/detail/5.jpg',
            'text_anonce' => 
						'Nulla condimentum lorem id nulla finibus, ac fringilla mauris tincidunt. Suspendisse quis nisi dolor. Etiam felis eros, iaculis sed bibendum id, dignissim vel sapien. Donec sit amet mi nec est ultrices commodo a non mauris. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vivamus mollis enim dolor, a tincidunt sapien vestibulum in. Donec sem orci, imperdiet non leo non, convallis lacinia sapien. Nunc vestibulum feugiat orci eget condimentum.',
            'text_detail' => 
						'Nulla condimentum lorem id nulla finibus, ac fringilla mauris tincidunt. Suspendisse quis nisi dolor. Etiam felis eros, iaculis sed bibendum id, dignissim vel sapien. Donec sit amet mi nec est ultrices commodo a non mauris. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vivamus mollis enim dolor, a tincidunt sapien vestibulum in. Donec sem orci, imperdiet non leo non, convallis lacinia sapien. Nunc vestibulum feugiat orci eget condimentum. Donec feugiat eleifend lorem, a interdum ligula fringilla sed. Nunc sit amet neque at est consectetur gravida. Praesent at tellus vel neque semper efficitur nec ut orci. Phasellus ut vestibulum lectus. Nunc vel sapien eget eros bibendum fringilla sit amet eu nisi. Nulla id enim non augue efficitur fermentum. Morbi felis risus, placerat eleifend mi et, lacinia porttitor lacus. Ut sollicitudin mauris facilisis leo scelerisque maximus. Nulla metus odio, placerat nec nisl vehicula, ullamcorper suscipit nisi. Fusce commodo arcu vitae porttitor efficitur. Sed elementum ultrices libero eget tincidunt. Sed tincidunt risus ligula, vel posuere nisi hendrerit nec. Phasellus suscipit tempus condimentum.',
            'published_at' => DB::raw('CURRENT_TIMESTAMP')
            ]);
    }
}