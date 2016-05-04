;
(function() {
	'use strict';

	angular
		.module('app')
		.controller('ContainerController', ContainerController);

	ContainerController.$inject = ['$window'];

	function ContainerController($window) {
		var container = this;
		container.loadComplete = false;

		activate();

		function activate() {
			$window.onload = ready();
		}

		function ready() {
			container.loadComplete = true;
		}
	}
})();