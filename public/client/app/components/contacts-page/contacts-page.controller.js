;
(function() {
	'use strict';

	angular
		.module('app')
		.controller('ContactsPageController', ContactsPageController);

	ContactsPageController.$inject = ['lkSeo'];

	function ContactsPageController(lkSeo) {
		var contacts = this;

		activate();

		function activate() {
			lkSeo.getSeo();
		}
	}
})();