'use strict';

// Declare app level module which depends on views, and components
angular.module('hackHappinessApp', [
  'ngRoute',
  'hackHappinessApp.home',
  'hackHappinessApp.explore',
  'ngMaterial'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/home'});
}])
.controller('HackHappinessAppMain', function($scope,$mdSidenav) {
    $scope.toggleSidenav = function(menuId) {
        $mdSidenav(menuId).toggle();
    };
});
