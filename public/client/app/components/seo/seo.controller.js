;
(function () {
	'use strict';

	angular
		.module('app')
		.controller('SeoController', SeoController);

	SeoController.$inject = ['$rootScope', '$http', 'lkSeo'];

	function SeoController($rootScope, $http, lkSeo) {
		var seo = this;
		
		seo.title = '';
		seo.description = '';
		seo.keywords = '';
		seo.image = '';
		
		activate();
		
		function activate() {
			$rootScope.$on('updateSEO', function (event, data) {
				seo.title = lkSeo.title;
				seo.description = lkSeo.description;
				seo.keywords = lkSeo.keywords;
				seo.image = lkSeo.image;
			});
		}
	}
})();