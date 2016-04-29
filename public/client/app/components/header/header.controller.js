;
(function () {
	'use strict';

	angular
		.module('app')
		.controller('HeaderController', HeaderController);

	HeaderController.$inject = ['$scope', '$mdSidenav', '$mdDialog'];

	function HeaderController($scope, $mdSidenav, $mdDialog) {
		var menuId = 'menu';
		var parent = angular.element(document.querySelector('body'));

		$scope.toggle = toggle;	
		$scope.isOpen = isOpen;	
		$scope.showDialog = showDialog;
		
		function isOpen() {
			$mdSidenav(menuId).isOpen();
		}

		function toggle() {
			$mdSidenav(menuId).toggle();
		}

		function showDialog(event) {
			$mdDialog.show({
				templateUrl: '../public/client/app/components/dialogs/phone-dialog/phone-dialog.template.html',
				parent: parent,
				targetEvent: event,
				clickOutsideToClose: true,
				controller: 'PhoneDialogController',
				controllerAs: 'vm'
			});
		}
	}
}());