(function(){
    function todoModel(){
        var self=this;
        
        this._items=[
                 'Ralph\'s run',
                 'buy a dog',
                 'crush CS35'
                ];
        this.getItems=function(){
            return self._items;
        }
        this.addItem=function(item){
            if(!item){return;};
            self._items.push(item);
        }
        this.removeItem=function(item){
            var index=self._items.indexOf(item);
            if(index >=0){
            self._items.splice(index,1);
            }
        }
        
        
        this._itemsT=[
                 'Ralph\'s run',
                 'buy a dog',
                 'crush CS35'
                ];
        this.getItemsT=function(){
            return self._itemsT;
        }
        this.addItemT=function(item){
            if(!item){return;};
            self._itemsT.push(item);
        }
        this.removeItemT=function(item){
            var index=self._itemsT.indexOf(item);
            if(index >=0){
            self._itemsT.splice(index,1);
            }
        }
    };
        angular.module('todoApp')
        .service('todoModel', todoModel);
})();

