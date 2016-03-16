;
(function () {
	'use strict';

	angular
		.module('app')
		.directive('lkFab', lkFab);

	function lkFab() {
		return {
			templateUrl: '../public/client/app/directives/lk-fab/template.html',
			replace: true,
			restrict: 'E',
			controller: 'FABCtrl',
			controllerAs: 'vm'
		}
	}
})();