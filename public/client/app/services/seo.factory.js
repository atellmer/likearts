;
(function () {
	'use strict';

	angular
		.module('app')
		.factory('lkSeo', lkSeo);

	lkSeo.$inject = ['$rootScope', '$http', '$timeout'];

	function lkSeo($rootScope, $http, $timeout) {
		var path = '/getseo';
		var url = '';
		var params = '/';
		var data = [];
		var postfix = ' | Likearts — Сайты на заказ'
		var seoFactory = {
			getSeo: getSeo,
			title: '',
			description: '',
			keywords: '',
			image: ''
		};

		function getSeo() {
			$timeout(function () {
				url = document.location.href.split('/');
				url = url.slice(3, url.length);

				if (url.length === 1) {
					if (url[0] === '') {
						getSeoData('/');
					} else {
						getSeoData('/' + url[0] + '/');
					}
				} else {
					params = '/';
					for (var i = 0; i < url.length; i++) {
						params += url[i] + '/';
					}
					getSeoData(params);
				}
			}, 0);
		}

		function getSeoData(param) {
			if(data.length === 0) {
				$http.get(path).success(function (response) {
					data = response;
					parseSeoData(param);
					$rootScope.$emit('updateSEO');
				});
			} else {
				parseSeoData(param);
				$rootScope.$emit('updateSEO');
			}	
		}

		function parseSeoData(param) {
			for (var i = 0; i < data.length; i++) {
				if (data[i].url === param) {
					seoFactory.title = data[i].title + postfix;
					seoFactory.description = data[i].description;
					seoFactory.keywords = data[i].keywords;
					seoFactory.image = data[i].image;
				}
			}
		}
		return seoFactory;
	}
})();