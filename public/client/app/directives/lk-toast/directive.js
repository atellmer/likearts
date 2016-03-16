;
(function () {
	'use strict';

	angular
		.module('app')
		.directive('lkToast', lkToast);

	function lkToast() {
		return {
			templateUrl: '../public/client/app/directives/lk-toast/template.html',
			replace: true,
			restrict: 'E'
		}
	}
})();