;
(function () {
	'use strict';

	angular
		.module('app')
		.directive('lkPortfolioList', lkPortfolioList);

	function lkPortfolioList() {
		return {
			templateUrl: '../public/client/app/directives/lk-portfolio-list/template.html',
			replace: true,
			restrict: 'E',
			controller: 'PortfolioCtrl',
			controllerAs: 'vm'
		}
	}
})();