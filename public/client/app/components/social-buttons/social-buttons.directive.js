;
(function () {
	'use strict';

	angular
		.module('app')
		.directive('lkSocialButtons', lkSocialButtons);

	function lkSocialButtons() {
		
		var directive = {
			templateUrl: '../public/client/app/components/social-buttons/social-buttons.template.html',
			replace: true,
			restrict: 'E',
			controller: 'SocialButtonsController',
			controllerAs: 'socialButtons'
		}
		return directive;
	}
})();