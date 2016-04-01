;
(function () {
	'use strict';

	angular
		.module('app')
		.controller('FABCtrl', FABCtrl);

	FABCtrl.$inject = ['$scope', '$mdDialog', 'lkBack'];

	function FABCtrl($scope, $mdDialog, lkBack) {
		var elementBody = angular.element(document.querySelector('body')),
			elementHtml = angular.element(document.querySelector('html')),
			parent = angular.element(document.querySelector('body'));

		this.isOpen = false;
		this.selectedMode = 'md-fling';
		this.selectedDirection = 'up';
		this.hover = false;

		$scope.moveUp = moveUp;

		$scope.goBack = lkBack.goBack;


		$scope.showDialog = function (ev) {
			return showDialog(ev);
		}

		function moveUp() {
			elementBody.animate({
				scrollTop: 0
			}, 500);
			elementHtml.animate({
				scrollTop: 0
			}, 500);
		}

		function showDialog(ev) {
			$mdDialog.show({
				templateUrl: '../public/client/app/views/phone-dialog.html',
				parent: parent,
				targetEvent: ev,
				clickOutsideToClose: true,
				controller: 'PhoneDialogCtrl'
			});
		}
	}
})();