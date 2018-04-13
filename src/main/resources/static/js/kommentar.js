angular.module('kommentar', ['ngMessages']).controller('kommentarCtrl', ['CommentExchangeService', '$window', '$scope', '$http', 
	
	function(CommentExchangeService, $window, $scope, $http) {
	
		var self = this;
		self.submitComment = submitComment;
		self.comment = {
				inhalt : ''
		}
		
		
		console.log("Started Comment app");
	    
	    
	    function submitComment() {
	    	
	    	if (!self.kommentarform.$valid){
	    		console.log('The comment data is not valid!');
	    		return;
	    	}
	    	
	    	console.log("submit comment ...");	
	    				
						
			//	delegate rest communication   		
	    	CommentExchangeService.submitComment(self.comment)
	        .then(
	        function(result){
	        	console.log(result);
	        	self.comment.inhalt = '';
	        },
	        function(errResponse){
	            console.error('Error while submitting Comment');
	            $window.alert('Could not save your Comment')
	        }
	        );
	    };

        
}]);
