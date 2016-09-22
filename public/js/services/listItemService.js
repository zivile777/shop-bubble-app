angular.module('ListItemService', [])
  .factory('ListItem', function($http) {
    return {
      get: function() {
        return $http.get('/items');
      },
      create: function(itemData) {
        return $http.post('/items', itemData);
      },
      delete: function(id) {
        return $http.delete('/items/' + id);
      }
    }
  });