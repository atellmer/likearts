;
(function () {
	'use strict';

	angular
		.module('app')
		.factory('lkStore', lkStore);

	function lkStore() {
		var store = {
			cost: 0,
			project: '',
			services: []
		}

		return store;
	}
})();