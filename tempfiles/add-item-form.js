(function(){
    function addItemForm(todoModel){
            var linkFn=function($scope){
                $scope.addItem=function(item){ //can use functions implemented in todomodel
                todoModel.addItem(item);
                $scope.newItem='';
            }
        }
	   console.log('add item form');
        return {
            restrict: 'E',
            templateUrl: 'add-item-form.html',
            scope: {},
            link: linkFn,
        };
    };
    angular.module('todoApp')
	.directive('addItemForm', ['todoModel', addItemForm]); //because added as dependency

})();