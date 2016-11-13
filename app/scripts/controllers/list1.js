'use strict';

/**
 * @ngdoc function
 * @name 1512App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the 1512App
 */
angular.module('1512App')
  .controller('list1', function ($scope,$http) {
     $http({
     	methed:"get",
     	url:"http://www.somenote.cn:1602/list1"
     }).success(function(data){
     	$scope.a=data
     })
  });