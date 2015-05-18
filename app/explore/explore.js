'use strict';

angular.module('hackHappinessApp.explore', [
	'ngRoute',
	'hackHappinessApp.happies.happy-add-form',
])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/explore', {
    templateUrl: 'explore/explore.tpl.html',
    controller: 'ExploreCtrl'
  });
}])

.controller('ExploreCtrl', [function() {

}]);