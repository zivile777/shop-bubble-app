angular.module('ListItemService', [])
  .factory('ListItem', function($http) {
    return {
      get : function() {
        return $http.get('/api/items');
      },
      create : function(todoData) {
        return $http.post('/api/items', itemData);
      },
      delete : function(id) {
        return $http.delete('/api/items/' + id);
      }
    }
  });