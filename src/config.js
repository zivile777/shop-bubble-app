var angular = require('angular');
var uiRouter = require('angular-ui-router');
var todosController = require('todos/')

var app = angular.module('app', [uiRouter]);

app.config(($stateProvider, $urlRouterProvider), function() {
  $urlRouterProvider.otherwise('/');
  $stateProvider.state('list-bubbles', {
    url: '/',
    template: require('list-bubbles/list-bubbles.html');
  });
});

module.exports = app;
