'use strict';

angular.module('hackHappinessApp.happies.happies-service', [])

.factory('HappiesService', function() {
	var service = {
		list: [],
		add: add,//()
	};

	return service;

	function add(happy) {
		service.list.push(happy);		
	}	
})
