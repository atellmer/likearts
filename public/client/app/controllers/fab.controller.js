;
(function () {
	'use strict';

	angular
		.module('app')
		.controller('FABCtrl', FABCtrl);

	FABCtrl.$inject = ['$mdDialog', 'lkBack'];

	function FABCtrl($mdDialog, lkBack) {
		var vm = this;
		var elementBody = angular.element(document.querySelector('body'));
		var elementHtml = angular.element(document.querySelector('html'));

		vm.isOpen = false;
		vm.selectedMode = 'md-fling';
		vm.selectedDirection = 'up';
		vm.hover = false;

		vm.moveUp = moveUp;
		vm.goBack = lkBack.goBack;
		vm.showDialog = function (ev) {
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
				templateUrl: '../public/client/app/views/order-dialog.html',
				parent: elementBody,
				targetEvent: ev,
				clickOutsideToClose: true,
				controller: 'OrderDialogCtrl',
				controllerAs: 'vm'
			});
		}
	}
})();