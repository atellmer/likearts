;
(function () {
	'use strict';

	angular
		.module('app')
		.controller('CalculateBtnCtrl', CalculateBtnCtrl);

	CalculateBtnCtrl.$inject = [];

	function CalculateBtnCtrl() {
		var vm = this;
		var element = angular.element(document.querySelector('#scroll-here'));
		var elementBody = angular.element(document.querySelector('body'));
		var elementHtml = angular.element(document.querySelector('html'));

		vm.go = go;
		
		function go() {
			elementBody.animate({
				scrollTop: (element.offset().top - 50)
			}, 500);
			elementHtml.animate({
				scrollTop: (element.offset().top - 50)
			}, 500);
		}
	}
})();