;
(function () {
	'use strict';

	angular
		.module('app')
		.controller('ContainerController', ContainerController);

	ContainerController.$inject = ['$window'];

	function ContainerController($window) {
		var vm = this;
		vm.loadComplete = false;
		
		activate();
		
		function activate() {
			$window.onload = ready();
		}
		
		function ready() {
			vm.loadComplete = true;
		}
	}
}());