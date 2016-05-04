;
(function () {
	'use strict';

	angular
		.module('app')
		.controller('PostController', PostController);

	PostController.$inject = ['$http', '$stateParams', 'lkMove'];

	function PostController($http, $stateParams, lkMove) {
		var post = this;
		var id = $stateParams.id;
		var path = '/getpost/' + id;
		
		activate();
	
		function activate() {
			lkMove.toTop();
			
			$http.get(path).success(function (response) {
				post.item = response;
			});
		}
	}
}());