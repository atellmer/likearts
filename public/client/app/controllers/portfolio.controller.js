;
(function () {
	'use strict';

	angular
		.module('app')
		.controller('PortfolioCtrl', PortfolioCtrl);

	PortfolioCtrl.$inject = ['$http'];

	function PortfolioCtrl($http) {
		var vm = this;
		var path = '/getportfolio';

		activate();

		function activate() {
			$http.get(path).success(function (response) {
				vm.items = response;
			});
		}
	}
})();