/**
 * Created by kamoszm on 2015-11-27.
 */

app.config(['$routeProvider', function($routeProvider){
    $routeProvider
        .when('/', {
            templateUrl: 'core/homepage/homepage.tpl.html'
        })
        .otherwise({
            templateUrl : 'core/error/error.tpl.html'
        });

}]);