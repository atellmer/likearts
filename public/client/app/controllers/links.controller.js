;
(function () {
	'use strict';

	angular
		.module('app')
		.controller('LinksCtrl', LinksCtrl);

	LinksCtrl.$inject = ['$scope'];

	function LinksCtrl($scope) {

		$scope.goTo = function () {
			return goTo();
		}

		function goTo() {
			return false
		}

	}

})();