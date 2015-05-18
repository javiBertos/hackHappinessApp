'use strict';

angular.module('hackHappinessApp.home', [
	'hackHappinessApp.happies',
	'ngRoute'
])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'home/home.tpl.html',
    controller: 'HomeCtrl'
  });
}])

.controller('HomeCtrl', function(HappiesService, $scope) {
	$scope.happies = HappiesService;
});