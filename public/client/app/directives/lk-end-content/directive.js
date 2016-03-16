;
(function () {
	'use strict';

	angular
		.module('app')
		.directive('lkEndContent', lkEndContent);

	function lkEndContent() {
		return {
			templateUrl: '../public/client/app/directives/lk-end-content/template.html',
			replace: true,
			restrict: 'E'
		}
	}
})();