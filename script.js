var app = angular.module('counter', []);
var number = 0;

app.controller('counterNumber', function($scope) {
  $scope.counterNumber = function(number) {
    number++;
    return number;

  };
});
