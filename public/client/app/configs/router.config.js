;
(function () {
	'use strict';
	angular
		.module('app')
		.config(router);

	router.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider', 'valdrProvider'];

	function router($stateProvider, $urlRouterProvider, $locationProvider) {
		$locationProvider.html5Mode(true);
		$urlRouterProvider.otherwise('/');
		$stateProvider
			.state('root', {
				url: '/',
				templateUrl: '../public/client/app/components/landing-page/landing-page.template.html',
				controller: 'LandingPageController',
				controllerAs: 'landing'
			})
			.state('blog', {
				url: '/blog',
				templateUrl: '../public/client/app/components/blog/blog.template.html',
				controller: 'BlogController',
				controllerAs: 'vm'
			})
			.state('post', {
				url: '/blog/:id',
				templateUrl: '../public/client/app/components/post/post.template.html',
				controller: 'PostController',
				controllerAs: 'vm'
			})
			.state('portfolio', {
				url: '/portfolio/:id',
				templateUrl: '../public/client/app/components/portfolio-item/portfolio-item.template.html',
				controller: 'PortfolioItemController',
				controllerAs: 'vm'
			})
			.state('contacts', {
				url: '/contacts',
				templateUrl: '../public/client/app/components/contacts-page/contacts-page.template.html'
			});
	}
}());