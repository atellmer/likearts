;
(function () {
	'use strict';
	angular
		.module('app')
		.controller('PortfolioItemController', PortfolioItemController);

	PortfolioItemController.$inject = ['$http', '$stateParams', 'lkMove'];

	function PortfolioItemController($http, $stateParams, lkMove) {
		var portfolioItem = this;
		var id = $stateParams.id;
		var	path = '/getportfolio/' + id;

		activate();
		
		function activate() {
			lkMove.toTop();
			
			$http.get(path).success(function (response) {
				portfolioItem.item = response;
			});
		}
	}
}());