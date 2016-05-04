;
(function () {
	'use strict';

	angular
		.module('app')
		.controller('FabButtonController', FabButtonController);

	FabButtonController.$inject = ['lkMove'];

	function FabButtonController(lkMove) {
		var fabButton = this;

		fabButton.isOpen = false;
		fabButton.selectedMode = 'md-fling';
		fabButton.selectedDirection = 'up';
		fabButton.hover = false;

		fabButton.toTopWithAnimate = lkMove.toTopWithAnimate;
		fabButton.toBack = lkMove.toBack;
	}
})();