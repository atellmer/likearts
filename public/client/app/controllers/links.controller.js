;
(function () {
	'use strict';

	angular
		.module('app')
		.controller('LinksCtrl', LinksCtrl);

	LinksCtrl.$inject = [];

	function LinksCtrl() {
		var vm = this;

		vm.goTo = goTo;
		
		function goTo() {
			return false
		}
	}

})();