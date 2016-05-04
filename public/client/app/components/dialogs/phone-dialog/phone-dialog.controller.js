;
(function () {
	'use strict';

	angular
		.module('app')
		.controller('PhoneDialogController', PhoneDialogController);

	PhoneDialogController.$inject = ['$http', '$sanitize', '$mdDialog', '$mdToast'];

	function PhoneDialogController($http, $sanitize, $mdDialog, $mdToast) {
		var phoneDialog = this;
		var toast = angular.element(document.querySelector('#toast'));
		var toastText = 'Ок! Мы вам перезвоним!';

		phoneDialog.data = {
			name: null,
			phone: null
		};

		phoneDialog.send = send;
		phoneDialog.cancel = cancel;

		function send() {
			phoneDialog.data.name = $sanitize(phoneDialog.data.name);
			phoneDialog.data.phone = $sanitize(phoneDialog.data.phone);
			phoneDialog.data = JSON.stringify(phoneDialog.data);
			console.log(phoneDialog.data);
			$http.post('/phone', phoneDialog.data).success(function (response) {
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
})();