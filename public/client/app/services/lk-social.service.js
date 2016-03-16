;
(function () {
	'use strict';

	angular
		.module('app')
		.factory('lkSocial', lkSocial);

	lkSocial.$inject = ['$window'];

	function lkSocial($window) {

		return {
			vk: function (purl, ptitle, pimg, text) {
				var url;
				url = 'http://vk.com/share.php?';
				url += 'url=' + encodeURIComponent(purl);
				url += '&title=' + encodeURIComponent(ptitle);
				url += '&description=' + encodeURIComponent(text);
				url += '&image=' + encodeURIComponent(pimg);
				url += '&noparse=true';
				this.popup(url);
			},
			ok: function (purl, text) {
				var url;
				url = 'http://www.odnoklassniki.ru/dk?st.cmd=addShare&st.s=1';
				url += '&st.comments=' + encodeURIComponent(text);
				url += '&st._surl=' + encodeURIComponent(purl);
				this.popup(url);
			},
			fb: function (purl, ptitle, pimg, text) {
				var url;
				url = 'http://www.facebook.com/sharer.php?s=100';
				url += '&p[title]=' + encodeURIComponent(ptitle);
				url += '&p[summary]=' + encodeURIComponent(text);
				url += '&p[url]=' + encodeURIComponent(purl);
				url += '&p[images][0]=' + encodeURIComponent(pimg);
				this.popup(url);
			},
			tw: function (purl, ptitle) {
				var url;
				url = 'http://twitter.com/share?';
				url += 'text=' + encodeURIComponent(ptitle);
				url += '&url=' + encodeURIComponent(purl);
				url += '&counturl=' + encodeURIComponent(purl);
				this.popup(url);
			},
			popup: function (url) {
				$window.open(url, '', 'toolbar=0,status=0,width=626,height=436,left=' + (screen.availWidth - 626) / 2 + ',top=' + (screen.availHeight - 436) / 2);
			}
		}
	}
})();