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
			image = 'http://likearts.ru/public/client/img/social.png',
			description = 'Likearts: только качественные сайты, потому что репутация решает.';

		var youtubeChanel = 'UCaTkpm1PUpe9pPLcDbzQp1A';

		$scope.vk = vk;
		$scope.yt = yt;
		$scope.fb = fb;
		$scope.tw = tw;

		function vk() {
			lkSocial.vk(site, title, image, description);
		}

		function ok() {
			lkSocial.ok(site, description);
		}

		function yt() {
			lkSocial.yt(youtubeChanel);
		}

		function fb() {
			lkSocial.fb(site, title, image, description);
		}

		function tw() {
			lkSocial.tw(site, title);
		}
	}
})();