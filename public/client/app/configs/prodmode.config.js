;
(function() {
	'use strict';
	
	angular
		.module('app')
		.config(prodMode);

	prodMode.$inject = ['$compileProvider'];

	function prodMode($compileProvider) {
		//$compileProvider.debugInfoEnabled(false);
	}
})();