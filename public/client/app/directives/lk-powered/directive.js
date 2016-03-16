;
(function () {
	'use strict';

	angular
		.module('app')
		.directive('lkPowered', lkPowered);

	function lkPowered() {
		return {
			templateUrl: '../public/client/app/directives/lk-powered/template.html',
			replace: true,
			restrict: 'E'
		}
	}
})();