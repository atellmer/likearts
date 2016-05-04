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
		var seoFactory = {
			getSeo: getSeo,
			title: '',
			description: '',
			keywords: '',
			image: ''
		};
			
		function getSeo() {
			$timeout(function(){
				url = document.location.href.split('/');
				url = url.slice(3, url.length);
				
				if(url.length === 1) {
					if(url[0] === '') {
						parseSeoData('/');
					} else {
						parseSeoData('/' + url[0] + '/');
					}
				} else {
					params = '/';
					for (var i = 0; i < url.length; i++) {
						params += url[i] + '/';
					}
					parseSeoData(params);
				}
			}, 0);	
		}
		
		function parseSeoData(param) {
			$http.get(path).success(function(response) {
				data = response;	
				for (var i = 0; i < data.length; i++) {
					if(data[i].url === param) {
						seoFactory.title = data[i].title;
						seoFactory.description = data[i].description;
						seoFactory.keywords = data[i].keywords;
						seoFactory.image = data[i].image;
					}
				}
				$rootScope.$emit('updateSEO');
			});	
		}
		return seoFactory;
	}
})();