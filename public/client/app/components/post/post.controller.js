;
(function () {
	'use strict';

	angular
		.module('app')
		.controller('PostController', PostController);

	PostController.$inject = ['$http', '$stateParams', 'lkMove', 'lkSeo'];

	function PostController($http, $stateParams, lkMove, lkSeo) {
		var post = this;
		var id = $stateParams.id;
		var path = '/getpost/' + id;
		
		activate();
	
		function activate() {
			lkSeo.getSeo();		
			lkMove.toTop();		
			$http.get(path).success(function (response) {
				post.item = response;
			});
		}
	}
}());