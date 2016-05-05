;
(function () {
	'use strict';

	angular
		.module('app')
		.directive('lkMadeWithLove', lkMadeWithLove);

	function lkMadeWithLove() {	
		var directive = {
			templateUrl: '../public/client/app/components/made-with-love/made-with-love.template.html',
			replace: true,
			restrict: 'E'
		}
		
		return directive;
	}
}());