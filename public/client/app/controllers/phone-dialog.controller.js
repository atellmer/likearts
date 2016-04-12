;
(function () {

	'use strict';

	angular
		.module('app')
		.controller('PhoneDialogCtrl', PhoneDialogCtrl);

	PhoneDialogCtrl.$inject = ['$http', '$sanitize', '$mdDialog', '$mdToast'];

	function PhoneDialogCtrl($http, $sanitize, $mdDialog, $mdToast) {
		var vm = this;	
		var toast = angular.element(document.querySelector('#toast'));
		var data = {
				name: null,
				phone: null
			};
			
		vm.data = data;
		vm.send = send;
		vm.cancel = cancel;
		
		function send() {
			data.name = $sanitize(vm.data.name);
			data.phone = $sanitize(vm.data.phone);

			data = JSON.stringify(data);

			console.log(data);
			
			$http.post('/phone', data).success(function (response) {
				$mdToast.show(
					$mdToast.simple()
					.textContent('Ок! Мы вам перезвоним!')
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