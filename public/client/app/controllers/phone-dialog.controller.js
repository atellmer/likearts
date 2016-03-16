;
(function () {

	'use strict';

	angular
		.module('app')
		.controller('PhoneDialogCtrl', PhoneDialogCtrl);

	PhoneDialogCtrl.$inject = ['$scope', '$http', '$sanitize', '$mdDialog', '$mdToast'];

	function PhoneDialogCtrl($scope, $http, $sanitize, $mdDialog, $mdToast) {
		var data = {
				name: '',
				phone: ''
			},
			toast = angular.element(document.querySelector('#toast'));

		$scope.data = data;

		$scope.cancel = function () {
			$mdDialog.cancel();
		}

		$scope.send = function () {
			return send();
		}

		function send() {
			data.name = $sanitize($scope.data.name);
			data.phone = $sanitize($scope.data.phone);

			data = JSON.stringify(data);

			$http.post('/phone', data).success(function (response) {
				console.log(response);

				$mdToast.show(
					$mdToast.simple()
					.textContent('Ок! Мы вам перезвоним!')
					.position('bottom left')
					.hideDelay(5000)
					.parent(toast)
				);

				$mdDialog.cancel();
			});
		}
	}
})();