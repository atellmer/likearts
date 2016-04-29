;
(function () {
	'use strict';

	angular
		.module('app')
		.controller('PhoneDialogController', PhoneDialogController);

	PhoneDialogController.$inject = ['$http', '$sanitize', '$mdDialog', '$mdToast'];

	function PhoneDialogController($http, $sanitize, $mdDialog, $mdToast) {
		var vm = this;
		var toast = angular.element(document.querySelector('#toast'));
		var toastText = 'Ок! Мы вам перезвоним!';

		vm.data = {
			name: null,
			phone: null
		};

		vm.send = send;
		vm.cancel = cancel;

		function send() {
			vm.data.name = $sanitize(vm.data.name);
			vm.data.phone = $sanitize(vm.data.phone);
			vm.data = JSON.stringify(vm.data);
			console.log(vm.data);
			$http.post('/phone', vm.data).success(function (response) {
				$mdToast.show(
					$mdToast.simple()
					.textContent(toastText)
					.position('bottom left')
					.hideDelay(5000)
					.parent(toast)
				);

				cancel();
			});
		}

		function cancel() {
			$mdDialog.cancel();
		}
	}
}());