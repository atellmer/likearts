;
(function () {
	'use strict';
	angular
		.module('app')
		.controller('OrdeFormController', OrdeFormController);

	OrdeFormController.$inject = ['$http', '$mdDialog', 'lkStore'];

	function OrdeFormController($http, $mdDialog, lkStore) {
		var orderForm = this;
		var path = '/getprices';
		var parent = angular.element(document.querySelector('body'));

		orderForm.projects = [];
		orderForm.services = [];
		orderForm.cost = 0;
		orderForm.calculate = calculate;
		orderForm.showDialog = showDialog;

		activate();

		function activate() {
			$http.get(path).success(function (response) {
				var j = 0;
				var k = 0;
				for (var i = 0; i < response.length; i++) {
					if (response[i].type === 'сайт') {
						orderForm.projects[j] = response[i];
						j++;
					}
					if (response[i].type === 'услуга') {
						orderForm.services[k] = response[i];
						k++;
					}
				}
			});
		}

		function calculate() {
			orderForm.cost = 0;

			if (orderForm.select) {
				orderForm.cost += orderForm.projects[orderForm.select].price;

				lkStore.project = orderForm.projects[orderForm.select].name;
			}

			for (var i = 0; i < orderForm.services.length; i++) {
				if (orderForm.services[i].checked) {
					orderForm.cost += orderForm.services[i].price;

					if (lkStore.services.length === 0) {
						lkStore.services.push(orderForm.services[i].name);
					}

					if (filter(lkStore.services, orderForm.services[i].name)) {
						lkStore.services.push(orderForm.services[i].name);
					}
				} else {
					for (var j = 0; j < lkStore.services.length; j++) {
						if (lkStore.services[j] === orderForm.services[i].name) {
							lkStore.services.splice(j, 1);
						}
					}
				}
			}

			lkStore.cost = orderForm.cost;
		}

		function filter(array, row) {
			var sum = 0;
			for (var i = 0; i < array.length; i++) {
				sum += array[i].indexOf(row) + 1;
			}
			if (sum === 0) {
				return true;
			} else {
				return false;
			}
		}

		function showDialog(event) {
			$mdDialog.show({
				templateUrl: '../public/client/app/components/dialogs/order-dialog/order-dialog.template.html',
				parent: parent,
				targetEvent: event,
				clickOutsideToClose: true,
				controller: 'OrderDialogController',
				controllerAs: 'orderDialog'
			});
		}
	}
}());