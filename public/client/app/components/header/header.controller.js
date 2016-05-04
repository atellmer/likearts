;
(function () {
	'use strict';

	angular
		.module('app')
		.controller('HeaderController', HeaderController);

	HeaderController.$inject = ['$scope', '$mdSidenav', '$mdDialog'];

	function HeaderController($scope, $mdSidenav, $mdDialog) {
		var header = this;
		var menuId = 'menu';
		var parent = angular.element(document.querySelector('body'));

		header.toggle = toggle;	
		header.isOpen = isOpen;	
		header.showDialog = showDialog;
		
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
				controllerAs: 'phoneDialog'
			});
		}
	}
})();