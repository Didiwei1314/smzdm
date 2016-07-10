angular.module('starter.controllers-A', [])

.controller('ArticalsCtrl',['$scope', function($scope) {

  var lunbo = [
      {
        imgsrc:'../img/article/l3.jpg'
      },
      {
        imgsrc:'../img/article/l4.jpg'
      },
      {
        imgsrc:'../img/article/l5.jpg'
      }
  ];
  $scope.lunbo = lunbo;
  console.log(lunbo);


}]);
