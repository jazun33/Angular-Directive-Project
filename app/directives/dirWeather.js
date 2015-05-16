var app = angular.module('directivePractice');

app.directive('dirWeather', function(){
  return {
    templateUrl: 'app/directives/dirWeather.html',
    scope: {
      currentUser: '=',
      weatherCall: '&'
    },
    controller: function($scope) {

      $scope.$watch('currentUser', function() {
        $scope.weatherCall({city: $scope.currentUser.city})
          .then(function (weather) {
            $scope.weather = weather;
            console.log($scope.weather);
          }
        );
      });

    }
  }
});