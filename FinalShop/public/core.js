angular.module('finalShop', ['todoController', 'todoService','ngRoute']);


angular.module('finalShop').config(['$routeProvider',
	function($routeProvider) {
		$routeProvider
		.when('/', {
			templateUrl: '/views/login.html'
		})
		/*.when('/signup', {
			templateUrl: 'signup.html'
		})*/	
		.otherwise({
			redirectTo:'/'
		});
	}
]);
