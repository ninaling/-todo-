(function(){
    function todoController($scope, todoModel){ 
   
	$scope.getItems=todoModel.getItems;
    $scope.addItems=todoModel.addItems;
	$scope.removeItem=todoModel.removeItem;
        
    $scope.getItemsT=todoModel.getItemsT;
    $scope.addItemsT=todoModel.addItemsT;
	$scope.removeItemT=todoModel.removeItemT;
        
    }
    angular.module('todoApp')
	.controller('todoController', 
		    ['$scope', 'todoModel', todoController]); //add todoController to module

})();

