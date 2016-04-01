;
(function () {
	'use strict';
	angular
		.module('app')
		.controller('PostCtrl', PostCtrl);

	PostCtrl.$inject = ['$scope', '$http', '$stateParams', '$sanitize', 'lkScroll'];

	function PostCtrl($scope, $http, $stateParams, $sanitize, lkScroll) {
		lkScroll.top();

		var id = $stateParams.id,
			path = '/getpost/' + id;

		$http.get(path).success(function (response) {
			$scope.post = response;
		});
	}
})();