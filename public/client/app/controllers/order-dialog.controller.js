;
(function () {

	'use strict';

	angular
		.module('app')
		.controller('OrderDialogCtrl', OrderDialogCtrl);

	OrderDialogCtrl.$inject = ['$scope', '$http', '$sanitize', '$mdDialog', '$mdToast', 'lkStore'];

	function OrderDialogCtrl($scope, $http, $sanitize, $mdDialog, $mdToast, lkStore) {
		var data = {
				name: '',
				phone: '',
				email: '',
				cost: '',
				project: '',
				services: ''
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
			data.email = $sanitize($scope.data.email);
			data.cost = lkStore.cost ? lkStore.cost : 'Не заполнено';
			data.project = lkStore.project ? lkStore.project : 'Не заполнено';
			data.services = lkStore.services.length > 0 ? lkStore.services : 'Не заполнено';

			data = JSON.stringify(data);

			$http.post('/order', data).success(function (response) {

				console.log(response);

				$mdToast.show(
					$mdToast.simple()
					.textContent('Ваш заказ отправлен! Спасибо!')
					.position('bottom left')
					.hideDelay(5000)
					.parent(toast)
				);

				$mdDialog.cancel();
			});


		}
	}
})();