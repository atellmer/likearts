;
(function () {
	'use strict';

	angular
		.module('app')
		.factory('lkMove', lkMove);

	function lkMove() {
		var body = angular.element(document.querySelector('body'));
		var html = angular.element(document.querySelector('html'));
		
		var service = {
			toTop: toTop,
			toTopWithAnimate: toTopWithAnimate,
			toBack: toBack
		};
		
		function toTop() {		
			body.scrollTop(0);
			html.scrollTop(0);
		}
		
		function toTopWithAnimate() {		
			body.animate({
				scrollTop: 0
			}, 800);
			html.animate({
				scrollTop: 0
			}, 800);
		}

		function toBack() {
			history.back();
		}
		
		return service;
	}
})();