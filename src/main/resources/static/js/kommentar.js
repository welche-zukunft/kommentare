angular.module('kommentar', []).controller('kommentarCtrl', ['CommentExchangeService', '$window', '$scope', '$http', 
	
	function(CommentExchangeService, $window, $scope, $http) {
	
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
	        	self.comment.inhalt = '';
	        },
	        function(errResponse){
	            console.error('Error while submitting Comment');
	            $window.alert('Could not save your Comment')
	        }
	        );
	    };

        
}]);
