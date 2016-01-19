(function(){
    function todoController($scope, todoModel){
	$scope.name='Nina';
	$scope.getItems=todoModel.getItems;
	$scope.removeItem=todoModel.removeItem;
    }
    angular.module('todoApp')
	.controller('todoController', 
		    ['$scope', 'todoModel', todoController]);

})();