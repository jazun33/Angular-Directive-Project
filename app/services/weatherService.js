var app = angular.module('directivePractice');

app.service('weatherService', function($http, $q) {

  this.getWeather = function(city) {
    var dfd = $q.defer();
    $http({
      method: 'GET',
      url: 'http://api.openweathermap.org/data/2.5/weather?q=' + city
    }).then(function (response) {
      var temp = parseInt((response.data.main.temp - 273.15) * 1.8000 + 32.00);
      var calcTemp = temp + " degrees fahrenheit";
      dfd.resolve(calcTemp);
    });
    return dfd.promise;
  }
});