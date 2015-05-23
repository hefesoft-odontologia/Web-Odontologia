/*
    Se utiliza para pasar el token en el header de autenticacion
*/

angular.module('auth')
.factory('authInterceptorService', ['$q', '$localstorage',
    function ($q, $localstorage) {
 
    var authInterceptorServiceFactory = {};    
    
    var _request = function (config) {
        config.headers = config.headers || {};        
        var authData = $localstorage.getObject('authorizationData');
        config.headers.Authorization = authData.access_token;
        return config;
    }
 
    var _responseError = function (rejection) {
        if (rejection.status === 401) {
            $location.path('/login');
        }
        return $q.reject(rejection);
    }
 
    authInterceptorServiceFactory.request = _request;
    authInterceptorServiceFactory.responseError = _responseError;
 
    return authInterceptorServiceFactory;
}])
