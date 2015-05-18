'use strict';

angular.module('hackHappinessApp.happies.happy-add-form', [])

// <happy-add-form></happy-add-form>
.directive('happyAddForm', function() {
	var directive = {
		restrict: 'E',
		scope: {},
		templateUrl: 'components/happies/happy-add-form.tpl.html' ,
		controller: HappyAddFormController,
		controllerAs: 'vm',
	};
	return directive;
});

var oid = 0;

/* @ngInject */
function HappyAddFormController(HappiesService) {
	var vm = this;

	vm.happy = {oid: ++oid}; 
	vm.submit = submit;//()

	function submit() {
		HappiesService.add(vm.happy);
		vm.happy = {oid: ++oid};
	}
}