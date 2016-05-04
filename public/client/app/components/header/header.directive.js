;
(function () {
	'use strict';

	angular
		.module('app')
		.directive('lkHeader', lkHeader);

	function lkHeader() {
		
		var directive = {
			templateUrl: '../public/client/app/components/header/header.template.html',
			replace: true,
			restrict: 'E',
			controller: 'HeaderController',
			controllerAs: 'header'
		};
		
		return directive;
	}
})();