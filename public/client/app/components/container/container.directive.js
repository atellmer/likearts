;
(function () {
	'use strict';

	angular
		.module('app')
		.directive('lkContainer', lkContainer);

	function lkContainer() {	
		var directive = {
			templateUrl: '../public/client/app/components/container/container.template.html',
			replace: true,
			restrict: 'E',
			controller: 'ContainerController',
			controllerAs: 'vm'
		}
		
		return directive;
	}
}());