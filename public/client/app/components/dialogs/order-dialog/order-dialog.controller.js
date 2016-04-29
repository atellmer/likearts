;
(function () {

	'use strict';

	angular
		.module('app')
		.controller('OrderDialogController', OrderDialogController);

	OrderDialogController.$inject = ['$http', '$sanitize', '$mdDialog', '$mdToast', 'lkStore'];

	function OrderDialogController($http, $sanitize, $mdDialog, $mdToast, lkStore) {
		var vm = this;	
		var toast = angular.element(document.querySelector('#toast'));
		
		vm.data = {
				name: null,
				phone: null,
				email: null,
				cost: null,
				project: null,
				services: null
			};

		vm.send = send;
		vm.cancel = cancel;
		
		function send() {
			vm.data.name = $sanitize(vm.data.name);
			vm.data.phone = $sanitize(vm.data.phone);
			vm.data.email = $sanitize(vm.data.email);
			vm.data.cost = lkStore.cost ? lkStore.cost : 'Не заполнено';
			vm.data.project = lkStore.project ? lkStore.project : 'Не заполнено';
			vm.data.services = lkStore.services.length > 0 ? lkStore.services : 'Не заполнено';
			vm.data = JSON.stringify(vm.data);
			$http.post('/order', vm.data).success(function (response) {
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
}());