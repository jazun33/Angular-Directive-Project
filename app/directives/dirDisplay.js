var app = angular.module('directivePractice');

app.directive('dirDisplay', function(){
  return {
    restrinct: 'E',
    templateUrl: 'app/directives/dirDisplay.html',
    link: function (scope, element, attributes) {

      element.on('click', function(){
        scope.showInfo = !scope.showInfo;
        scope.$apply();
      });
    }
  }
});