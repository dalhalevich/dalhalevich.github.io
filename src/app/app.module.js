var threeInput = angular.module('threeInput', ['ngRoute'])
    .config(function($routeProvider){$routeProvider.
    when('/:numbers', {
        templateUrl:'tmp/inputs.html',
        controller:'threeInputCtrl'}).
    otherwise({redirectTo: '/_0_0'});});