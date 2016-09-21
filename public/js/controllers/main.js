angular.module('ListItemController', [])

  .controller('mainController', function($scope, $http) {
    $scope.headerCircle = {
      "width": "400px",
      "height": "400px",
      "border-radius": "50%",
      "font-size": "30px",
      "color": "white",
      "line-height": "400px",
      "text-align": "center",
      "background": "coral"
    },

    $scope.itemCircle = {
      "width": "60px",
      "height": "60px",
      "border-radius": "50%",
      "font-size": "17px",
      "color": "white",
      "line-height": "60px",
      "text-align": "center",
      "background": "coral"
    },

    $scope.formData = {};
    $http.get('/api/items')
      .success(function(data) {
        $scope.items = data;
      })
      .error(function(data) {
        console.log('Error: ' + data);
      });

      $scope.createItem = function() {
        $http.post('/api/items', $scope.formData)
          .success(function(data) {
              $scope.formData = {}; 
              $scope.items = data;
          })
          .error(function(data) {
            console.log('Error: ' + data);
          });
      };

      $scope.deleteItem = function(id) {
        $http.delete('/api/items/' + id)
          .success(function(data) {
            $scope.items = data;
          })
          .error(function(data) {
            console.log('Error: ' + data);
          });
      };
  });