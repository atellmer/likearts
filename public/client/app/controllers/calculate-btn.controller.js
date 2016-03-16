;
(function () {
	'use strict';

	angular
		.module('app')
		.controller('CalculateBtnCtrl', CalculateBtnCtrl);

	CalculateBtnCtrl.$inject = ['$scope'];

	function CalculateBtnCtrl($scope) {
		var element = angular.element(document.querySelector('#scroll-here')),
			elementBody = angular.element(document.querySelector('body')),
			elementHtml = angular.element(document.querySelector('html'));

		$scope.go = function () {
			return go();
		}

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