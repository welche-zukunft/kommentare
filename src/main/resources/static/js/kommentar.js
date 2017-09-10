angular.module('kommentar', []).controller('kommentarCtrl', ['CommentExchangeService', '$scope', '$http', 
	
	function(CommentExchangeService, $scope, $http) {
	
		var self = this;
		self.submitComment = submitComment;
		self.comment = {
				inhalt : ''
		}
		
		
		console.log("Started Comment app");
	    
	    
	    function submitComment() {
	    	console.log("submit comment ...");	
	    				
						
			//	delegate rest communication   		
	    	CommentExchangeService.submitComment(self.comment)
	        .then(
	        function(result){
	        	console.log(result);
	        },
	        function(errResponse){
	            console.error('Error while submitting Events');
	        }
	        );
	    };

        
}]);
