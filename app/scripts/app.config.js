angular
  .module('odontologiaApp').config(['$stateProvider', '$urlRouterProvider', 
  	function ($stateProvider, $urlRouterProvider) {

  		$urlRouterProvider.otherwise('/');

  		$stateProvider

  		.state('main',{
  			url: "/",
  			templateUrl : "/views/main.html"
  		})

  		.state('register',{
  			url: "/register",
  			templateUrl : "/views/register/register.html"
  		})
  	
  }])
