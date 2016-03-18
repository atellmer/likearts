;
(function () {
	'use strict';

	angular
		.module('app')
		.controller('SocialCtrl', SocialCtrl);

	SocialCtrl.$inject = ['$scope', 'lkSocial'];

	function SocialCtrl($scope, lkSocial) {
		var site = 'http://likearts.ru',
			title = 'LIKEARTS',
			image = 'http://likearts.ru/public/client/img/social-pic.jpg',
			description = 'Likearts: только качественные сайты, потому что репутация решает.';

		$scope.vk = function () {
			return vk();
		}
		$scope.ok = function () {
			return ok();
		}
		$scope.fb = function () {
			return fb();
		}
		$scope.tw = function () {
			return tw();
		}

		function vk() {
			lkSocial.vk(site, title, image, description);
		}

		function ok() {
			lkSocial.ok(site, description);
		}

		function fb() {
			lkSocial.fb(site, title, image, description);
		}

		function tw() {
			lkSocial.tw(site, title);
		}
	}
})();