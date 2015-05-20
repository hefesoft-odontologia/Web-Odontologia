angular
  .module('odontologiaApp').config(['$stateProvider', '$urlRouterProvider', 
  	function ($stateProvider, $urlRouterProvider) {

  		$urlRouterProvider.otherwise('/login');

  		$stateProvider

/*
  		.state('main',{
  			url: "/",
  			templateUrl : "/views/main.html"
  		})
  */

      .state('app', {
        url: "/app",
        abstract: true,
        templateUrl: "/views/Menus/Principal.html"    
      })

      .state('app.main', {
        url: "/main",
        cache: false,
        views: {
            'menuContent': {
                templateUrl: "/views/main.html"
            }       
            }
      })


      /******************** Auth *******************/
      .state('register', {
        url: "/register",
        cache: false,
        templateUrl : "/views/register/register.html"        
      })

      .state('login', {
        url: "/login",
        cache: false,
        templateUrl : "/views/register/login.html"
      })

      .state('forgot', {
        url: "/forgot",
        cache: false,
        templateUrl : "/views/register/forgot.html"
      })

      /*********************************************/
    
  	
  }])
