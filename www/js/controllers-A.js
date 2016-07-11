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

  var artnav = [
    {
      imgsrc:'../img/article/navdiamond.jpg'
    },
    {
      imgsrc:'../img/article/navdiamond.jpg'
    },
    {
      imgsrc:'../img/article/navdiamond.jpg'
    },
    {
      imgsrc:'../img/article/navdiamond.jpg'
    },
    {
      imgsrc:'../img/article/navdiamond.jpg'
    }
  ];
  $scope.artnav = artnav;
  var navX = [
    {
      imgsrc:'../img/article/T-shirt.jpg'
    },
    {
      imgsrc:'../img/article/run.jpg',
      imgart:'#品牌故事#新手扫盲贴：TUMI常见系列'
    },
    {
      imgsrc:'../img/article/run.jpg',
      imgart:'#品牌故事#新手扫盲贴：TUMI常见系列'
    },
    {
      imgsrc:'../img/article/run.jpg',
      imgart:'#品牌故事#新手扫盲贴：TUMI常见系列'
    },
    {
      imgsrc:'../img/article/run.jpg',
      imgart:'#品牌故事#新手扫盲贴：TUMI常见系列'
    },
    {
      imgsrc:'../img/article/run.jpg',
      imgart:'#品牌故事#新手扫盲贴：TUMI常见系列'
    },
    {
      imgsrc:'../img/article/more.jpg'
    }
  ]
  $scope.navX = navX;

}]);
