;
(function () {
	'use strict';
	angular
		.module('app')
		.controller('BlogCtrl', BlogCtrl);

	BlogCtrl.$inject = ['$scope', '$http', '$window'];

	function BlogCtrl($scope, $http, $window) {
		var cash,
			last,
			delta,
			initial = 6,
			path = '/getposts';

		$http.get(path).success(function (response) {
			last = 0;
			delta = 3;
			cash = {};
			$scope.cards = {};
			cash = response;
			$scope.cards = cash.slice(0, initial);
			last = delta;
		});

		angular.element($window).on('scroll', scrollHandler);

		function loadMoreItems() {
			if (cash && (delta + last < cash.length)) {
				last = $scope.cards.length;

				var cards = $scope.cards.concat(cash.slice(last, last + delta));
				$scope.cards = cards;
			}
		}

		function scrollHandler($event) {
			var position,
				end,
				element = angular.element($window),
				endElement = angular.element(document.querySelector('#end-content'));

			position = element.scrollTop() + element.height();
			end = endElement.offset().top;

			if (position >= end) {
				$scope.$apply(loadMoreItems);
			}
		}
	}
})();