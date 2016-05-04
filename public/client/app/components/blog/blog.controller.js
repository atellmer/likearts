;
(function() {
	'use strict';
	angular
		.module('app')
		.controller('BlogController', BlogController);

	BlogController.$inject = ['$scope', '$http', '$window'];

	function BlogController($scope, $http, $window) {
		var blog = this;
		var cash = {};
		var last = 0;
		var delta = 3;
		var initial = 6;
		var path = '/getposts';
		var currentPosition = 0;
		var windowWrap = angular.element($window);

		var anchor = {
			node: angular.element(document.querySelector('#anchor')),
			position: 0
		}

		blog.cards = {};

		activate();

		function activate() {
			$http.get(path).success(function(response) {
				cash = response;
				blog.cards = cash.slice(0, initial);
				last = delta;
			});
			$window.addEventListener('scroll', scrollHandler);
		}

		function loadMoreItems() {
			if (cash && (delta + last < cash.length)) {
				last = blog.cards.length;
				blog.cards = blog.cards.concat(cash.slice(last, last + delta));
			}
		}

		function scrollHandler() {
			currentPosition = windowWrap.scrollTop() + windowWrap.height();
			anchor.position = anchor.node.offset().top;

			if (currentPosition >= anchor.position) {
				$scope.$apply(loadMoreItems);
			}
		}
	}
})();