;
(function () {
	'use strict';

	angular
		.module('app')
		.controller('HeadController', HeadController);

	HeadController.$inject = ['$rootScope', '$http', 'lkSeo'];

	function HeadController($rootScope, $http, lkSeo) {
		var head = this;
		
		head.title = '';
		head.description = '';
		head.keywords = '';
		head.image = '';
		
		head.defaultDescription = 'Likearts: только качественные сайты, потому что репутация решает.';
		head.defaultTitle = 'Likearts — сайты на заказ | Официальный сайт';
		head.defaultKeywords = 'создание сайтов, разработка сайтов, лендинг пейдж, landing page, сайт под ключ';
		head.defaultImage = 'public/client/img/social.png';
		
		activate();
		
		function activate() {
			$rootScope.$on('updateSEO', function (event, data) {
				head.title = lkSeo.title;
				head.description = lkSeo.description;
				head.keywords = lkSeo.keywords;
				head.image = lkSeo.image;
			});
		}
	}
})();