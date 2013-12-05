var routeapp = angular.module('routeapp',['ngRoute']);


routeapp.config(function($routeProvider){
	$routeProvider.when('/contact',{
	templateUrl:'views/contact.html',
	controller:'contactcont'
	}).when('/about',{
		templateUrl:'views/about.html',
	controller:'aboutcont'
	}).otherwise({
templateUrl:'views/home.html',
	});
});
routeapp.controller('contactcont', function($scope) {
     
    $scope.message = 'Contact';
     
});
routeapp.controller('aboutcont', function($scope) {
     
    $scope.message = 'About';
     
});