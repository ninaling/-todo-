(function(){
    function todoController($scope, todoModel){ //$scope object automatically passed in by program, but must take as argument
//        _items=[
//                 'Ralph\'s run',
//                 'buy a dog',
//                 'crush CS35'
//                ];
   
	$scope.getItems=todoModel.getItems;
    $scope.addItems=todoModel.addItems;
	$scope.removeItem=todoModel.removeItem;
        
    $scope.getItemsT=todoModel.getItemsT;
    $scope.addItemsT=todoModel.addItemsT;
	$scope.removeItemT=todoModel.removeItemT;
        
//    $scope.getItemsW=todoModel.getItemsW;
//	$scope.removeItemW=todoModel.removeItemW;
//        
//    $scope.getItems=todoModel.getItems;
//	$scope.removeItem=todoModel.removeItem;
//    $scope.getItems=todoModel.getItems;
//	$scope.removeItem=todoModel.removeItem;
    }
    angular.module('todoApp')
	.controller('todoController', 
		    ['$scope', 'todoModel', todoController]); //add todoController to module

})();

