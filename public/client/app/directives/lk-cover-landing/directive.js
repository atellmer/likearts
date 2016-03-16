;
(function () {
	'use strict';

	angular
		.module('app')
		.directive('lkCoverLanding', lkCoverLanding);

	function lkCoverLanding() {
		return {
			templateUrl: '../public/client/app/directives/lk-cover-landing/template.html',
			replace: true,
			restrict: 'E'
		}
	}
})();