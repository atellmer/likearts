;
(function () {
	'use strict';

	angular
		.module('app')
		.factory('lkBack', lkBack);

	function lkBack() {

		return {
			goBack: goBack
		}

		function goBack() {
			history.back();
		}
	}
})();