;
(function () {
	'use strict';

	angular
		.module('app')
		.controller('LandingPageController', LandingPageController);

	LandingPageController.$inject = ['$http', 'lkSeo'];

	function LandingPageController($http, lkSeo) {
		var landing = this;
		var anchor = angular.element(document.querySelector('#scroll-here'));
		var body = angular.element(document.querySelector('body'));
		var html = angular.element(document.querySelector('html'));
		var pathToprtfolio = '/getportfolio';

		landing.portfolio = {};
		landing.scrollTo = scrollTo;
		
		activate();

		function activate() {
			lkSeo.getSeo();
			
			$http.get(pathToprtfolio).success(function (response) {
				landing.portfolio = response;
			});
		}
		
		function scrollTo() {
			body.animate({
				scrollTop: (anchor.offset().top - 50)
			}, 500);
			html.animate({
				scrollTop: (anchor.offset().top - 50)
			}, 500);
		}
	}
})();