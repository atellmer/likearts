;
(function() {
	'use strict';

	angular
		.module('app')
		.controller('FabController', FabController);

	FabController.$inject = ['lkMove'];

	function FabController(lkMove) {
		var fab = this;
		
		fab.toTop = lkMove.toTopWithAnimate;
		fab.toBack = lkMove.toBack;
	}
})();