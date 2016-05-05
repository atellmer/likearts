;
(function () {
	'use strict';

	angular
		.module('app')
		.directive('lkFab', lkFab);

	function lkFab() {
		
		var directive = {
			templateUrl: '../public/client/app/components/fab/fab.template.html',
			replace: true,
			restrict: 'E',
			controller: 'FabController',
			controllerAs: 'fab'
		}
		
		return directive;
	}
})();