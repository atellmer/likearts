;
(function () {
	'use strict';

	angular
		.module('app')
		.directive('lkOrderForm', lkOrderForm);

	function lkOrderForm() {
		return {
			templateUrl: '../public/client/app/directives/lk-order-form/template.html',
			replace: true,
			restrict: 'E',
			controller: 'OrderCtrl'
		}
	}
})();