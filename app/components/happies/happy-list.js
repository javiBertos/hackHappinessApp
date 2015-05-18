'use strict';

angular.module('hackHappinessApp.happies.happy-list', [])

// <happy-list></happy-list>
.directive('happyList', function() {
	var directive = {
		restrict: 'E',
		scope: {},
		templateUrl: 'components/happies/happy-list.tpl.html' ,
		controller: 'HappyListController',
		controllerAs: 'vm',
	};
	return directive;
})

.controller('HappyListController', function(HappiesService) {
	var vm = this;
	vm.happies = HappiesService.list;
});