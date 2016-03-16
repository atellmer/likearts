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

		$scope.goBack = function () {
			return goBack();
		}

		$http.get(path).success(function (response) {
			$scope.post = response;
		});

		function goBack() {
			history.back();
		}
	}
})();