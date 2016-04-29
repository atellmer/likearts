;
(function () {
	'use strict';
	angular
		.module('app')
		.controller('OrdeFormController', OrdeFormController);

	OrdeFormController.$inject = ['$http', '$mdDialog', 'lkStore'];

	function OrdeFormController($http, $mdDialog, lkStore) {
		var vm = this;
		var path = '/getprices';
		var parent = angular.element(document.querySelector('body'));

		vm.projects = [];
		vm.services = [];
		vm.cost = 0;
		vm.calculate = calculate;
		vm.showDialog = showDialog;

		activate();

		function activate() {
			$http.get(path).success(function (response) {
				var j = 0;
				var k = 0;
				for (var i = 0; i < response.length; i++) {
					if (response[i].type === 'сайт') {
						vm.projects[j] = response[i];
						j++;
					}
					if (response[i].type === 'услуга') {
						vm.services[k] = response[i];
						k++;
					}
				}
			});
		}

		function calculate() {
			vm.cost = 0;

			if (vm.select) {
				vm.cost += vm.projects[vm.select].price;

				lkStore.project = vm.projects[vm.select].name;
			}

			for (var i = 0; i < vm.services.length; i++) {
				if (vm.services[i].checked) {
					vm.cost += vm.services[i].price;

					if (lkStore.services.length === 0) {
						lkStore.services.push(vm.services[i].name);
					}

					if (filter(lkStore.services, vm.services[i].name)) {
						lkStore.services.push(vm.services[i].name);
					}
				} else {
					for (var j = 0; j < lkStore.services.length; j++) {
						if (lkStore.services[j] === vm.services[i].name) {
							lkStore.services.splice(j, 1);
						}
					}
				}
			}

			lkStore.cost = vm.cost;
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
				controllerAs: 'vm'
			});
		}
	}
}());