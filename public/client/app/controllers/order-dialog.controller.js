;
(function () {

	'use strict';

	angular
		.module('app')
		.controller('OrderDialogCtrl', OrderDialogCtrl);

	OrderDialogCtrl.$inject = ['$http', '$sanitize', '$mdDialog', '$mdToast', 'lkStore'];

	function OrderDialogCtrl($http, $sanitize, $mdDialog, $mdToast, lkStore) {
		var vm = this;	
		var toast = angular.element(document.querySelector('#toast'));
		var data = {
				name: null,
				phone: null,
				email: null,
				cost: null,
				project: null,
				services: null
			};

		vm.data = data;
		vm.send = send;
		vm.cancel = cancel;
		
		function send() {
			data.name = $sanitize(vm.data.name);
			data.phone = $sanitize(vm.data.phone);
			data.email = $sanitize(vm.data.email);
			data.cost = lkStore.cost ? lkStore.cost : 'Не заполнено';
			data.project = lkStore.project ? lkStore.project : 'Не заполнено';
			data.services = lkStore.services.length > 0 ? lkStore.services : 'Не заполнено';

			data = JSON.stringify(data);

			$http.post('/order', data).success(function (response) {

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