;
(function () {
	'use strict';

	angular
		.module('app')
		.controller('FabButtonController', FabButtonController);

	FabButtonController.$inject = ['lkMove'];

	function FabButtonController(lkMove) {
		var vm = this;

		vm.isOpen = false;
		vm.selectedMode = 'md-fling';
		vm.selectedDirection = 'up';
		vm.hover = false;

		vm.toTopWithAnimate = lkMove.toTopWithAnimate;
		vm.toBack = lkMove.toBack;
	}
}());