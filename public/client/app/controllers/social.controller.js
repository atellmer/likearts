;
(function () {
	'use strict';

	angular
		.module('app')
		.controller('SocialCtrl', SocialCtrl);

	SocialCtrl.$inject = ['lkSocial'];

	function SocialCtrl(lkSocial) {
		var vm = this;
		var site = 'http://likearts.ru',
			title = 'LIKEARTS',
			image = 'http://likearts.ru/public/client/img/social.png',
			description = 'Likearts: только качественные сайты, потому что репутация решает.';

		var youtubeChanel = 'UCaTkpm1PUpe9pPLcDbzQp1A';
		var subscribe = '?sub_confirmation=1';

		vm.vk = vk;
		vm.yt = yt;
		vm.fb = fb;
		vm.tw = tw;

		function vk() {
			lkSocial.vk(site, title, image, description);
		}

		function ok() {
			lkSocial.ok(site, description);
		}

		function yt() {
			lkSocial.yt(youtubeChanel + subscribe);
		}

		function fb() {
			lkSocial.fb(site, title, image, description);
		}

		function tw() {
			lkSocial.tw(site, title);
		}
	}
})();