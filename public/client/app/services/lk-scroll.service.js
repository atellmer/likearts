;
(function () {
	'use strict';

	angular
		.module('app')
		.factory('lkScroll', lkScroll);

	function lkScroll() {

		return {
			top: top
		}

		function top() {
			angular.element("body,html").scrollTop(0);
		}
	}
})();