/**
 * Created by kamoszm on 2015-07-14.
 */

app.service('conn', ['$http','$q', function($http,$q){
    this.getData = function(url,data){
        var deferred = $q.defer();
        $http.get(url,data)
            .success(function(data){
                deferred.resolve(data);
            })
            .error(function(data){
                deferred.reject(data);
            });
        return deferred.promise;
    };
    this.postData = function(url,data){
        var deferred = $q.defer();
        $http.post(url, data)
            .success(function(data){
                deferred.resolve(data);
            })
            .error(function(data){
                deferred.reject(data);
            });
        return deferred.promise;
    };
}]);