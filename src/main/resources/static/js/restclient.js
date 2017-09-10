angular.module('kommentar').factory('CommentExchangeService', ['$http', '$q', '$location', function($http, $q, $location){
 
    var REST_SERVICE_URI = '//' + $location.$$host + ':' + $location.$$port;
 
    var factory = {
    	submitComment : submitComment,
    };
 
    return factory;
 
 
    function submitComment(comment) {
    	console.log("comment: " + comment);
        var deferred = $q.defer();
        $http.post(REST_SERVICE_URI + "/add/", comment)
            .then(
            function (response) {
                console.log('Success on submitting Event');
                deferred.resolve(response.data);
            },
            function(errResponse){
                console.error('Error while submitting Event');
                deferred.reject(errResponse);
            }
        );
        return deferred.promise;
    }

    
    
   
    
    
}])