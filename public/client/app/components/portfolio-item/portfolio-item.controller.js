;
(function () {
	'use strict';
	angular
		.module('app')
		.controller('PortfolioItemController', PortfolioItemController);

	PortfolioItemController.$inject = ['$http', '$stateParams', 'lkMove', 'lkSeo'];

	function PortfolioItemController($http, $stateParams, lkMove, lkSeo) {
		var portfolioItem = this;
		var id = $stateParams.id;
		var	path = '/getportfolio/' + id;

		activate();
		
		function activate() {
			lkSeo.getSeo();
			lkMove.toTop();
			$http.get(path).success(function (response) {
				portfolioItem.item = response;
			});
		}
	}
}());