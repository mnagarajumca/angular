var newapp=angular.module('newapp',['ngRoute','phonecatControllers','phonecatServices']);

newapp.config(['$routeProvider',function($routeProvider){
	$routeProvider.
	when('/phones',
	{
		templateUrl:'partials/phone-list.html',
		controller:'PhoneListCtrl'
		}).when('/phones/:PhoneId',{
			templateUrl:'partials/phone-detail.html',
			controller:'PhoneDetailCtrl'			
		}).otherwise({
			redirectTo:'/phones'
		});
	
}]);



