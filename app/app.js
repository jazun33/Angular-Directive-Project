var app = angular.module('directivePractice', ['ngRoute']);

app.config(function($routeProvider){
  $routeProvider
    .when('/', {
      templateUrl: 'app/views/dirView.html',
      controller: 'homeCtrl'
    })
});
