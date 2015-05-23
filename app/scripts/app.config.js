angular
  .module('odontologiaApp').config(['$stateProvider', '$urlRouterProvider', '$httpProvider',
  	function ($stateProvider, $urlRouterProvider, $httpProvider) {

      $httpProvider.defaults.withCredentials = true;
      $httpProvider.interceptors.push('authInterceptorService');

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


      /************************* Pacientes *******************************/

      .state('app.listadoPacientes', {
        url: "/listadoPacientes",
        cache: false,
        views: {
            'menuContent': {
                templateUrl: "/views/pacientes/listado.html"
            }       
            }
      })

      .state('app.paciente', {
        url: "/paciente",
        cache: false,
        views: {
            'menuContent': {
                templateUrl: "/views/pacientes/paciente.html"
            }       
            }
      })

      


      /*****************************************************/


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

      .state('404', {
        url: "/404",
        cache: false,
        templateUrl : "/views/404/404.html"
      })

      .state('forgot', {
        url: "/forgot",
        cache: false,
        templateUrl : "/views/register/forgot.html"
      })

      /*********************************************/
    
  	
  }])
