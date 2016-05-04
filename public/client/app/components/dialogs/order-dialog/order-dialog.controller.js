;
(function () {

	'use strict';

	angular
		.module('app')
		.controller('OrderDialogController', OrderDialogController);

	OrderDialogController.$inject = ['$http', '$sanitize', '$mdDialog', '$mdToast', 'lkStore'];

	function OrderDialogController($http, $sanitize, $mdDialog, $mdToast, lkStore) {
		var orderDialog = this;	
		var toast = angular.element(document.querySelector('#toast'));
		
		orderDialog.data = {
				name: null,
				phone: null,
				email: null,
				cost: null,
				project: null,
				services: null
			};

		orderDialog.send = send;
		orderDialog.cancel = cancel;
		
		function send() {
			orderDialog.data.name = $sanitize(orderDialog.data.name);
			orderDialog.data.phone = $sanitize(orderDialog.data.phone);
			orderDialog.data.email = $sanitize(orderDialog.data.email);
			orderDialog.data.cost = lkStore.cost ? lkStore.cost : 'Не заполнено';
			orderDialog.data.project = lkStore.project ? lkStore.project : 'Не заполнено';
			orderDialog.data.services = lkStore.services.length > 0 ? lkStore.services : 'Не заполнено';
			orderDialog.data = JSON.stringify(orderDialog.data);
			$http.post('/order', orderDialog.data).success(function (response) {
				$mdToast.show(
					$mdToast.simple()
					.textContent('Ваш заказ отправлен! Спасибо!')
					.position('bottom left')
					.hideDelay(5000)
					.parent(toast)
				);
				cancel();
			});
		}
		
		function cancel(){
			$mdDialog.cancel();
		}
	}
})();