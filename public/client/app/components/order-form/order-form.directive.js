;
(function () {
	'use strict';

	angular
		.module('app')
		.directive('lkOrderForm', lkOrderForm);

	function lkOrderForm() {
		var directive = {
			templateUrl: '../public/client/app/components/order-form/order-form.template.html',
			replace: true,
			restrict: 'E',
			controller: 'OrdeFormController',
			controllerAs: 'orderForm'
		}

		return directive;
	}
}());