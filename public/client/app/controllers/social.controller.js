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
			image = 'http://s.fotorama.io/1.jpg',
			description = 'Lorem Ipsum Dolor';

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