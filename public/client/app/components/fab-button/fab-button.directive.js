;
(function () {
	'use strict';

	angular
		.module('app')
		.directive('lkFabButton', lkFabButton);

	function lkFabButton() {
		
		var directive = {
			templateUrl: '../public/client/app/components/fab-button/fab-button.template.html',
			replace: true,
			restrict: 'E',
			controller: 'FabButtonController',
			controllerAs: 'fabButton'
		}
		
		return directive;
	}
})();