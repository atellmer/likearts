;
(function () {
	'use strict';

	angular
		.module('app')
		.controller('SocialButtonsController', SocialButtonsController);

	SocialButtonsController.$inject = ['lkSocial'];

	function SocialButtonsController(lkSocial) {
		var social = this;
		var site = 'http://likearts.ru';
		var title = 'LIKEARTS';
		var	image = 'http://likearts.ru/public/client/img/social.png';
		var	description = 'Likearts: только качественные сайты, потому что репутация решает.';

		var youtubeChanel = 'UCaTkpm1PUpe9pPLcDbzQp1A';
		var subscribe = '?sub_confirmation=1';

		social.vk = vk;
		social.yt = yt;
		social.fb = fb;
		social.tw = tw;

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
}());