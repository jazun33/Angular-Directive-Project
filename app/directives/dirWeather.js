var app = angular.module('directivePractice');

app.directive('dirWeather', function(){
  return {
    restrinct: 'E',
    templateUrl: 'app/directives/dirWeather.html',
    link: function (scope, element, attributes) {
      scope: {
        currentUser: '='
      }
    }
  }
});