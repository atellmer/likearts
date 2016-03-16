;
(function () {
	'use strict';
	angular
		.module('app')
		.controller('PortfolioItemCtrl', PortfolioItemCtrl);

	PortfolioItemCtrl.$inject = ['$scope', '$http', '$stateParams', 'lkScroll'];

	function PortfolioItemCtrl($scope, $http, $stateParams, lkScroll) {
		lkScroll.top();

		var id = $stateParams.id,
			path = '/getportfolio/' + id;

		$http.get(path).success(function (response) {
			$scope.item = response;
		});
	}
})();