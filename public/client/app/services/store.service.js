;
(function () {
	'use strict';

	angular
		.module('app')
		.factory('lkStore', lkStore);

	function lkStore() {
		var service = {
			cost: 0,
			project: '',
			services: []
		}

		return service;
	}
}());