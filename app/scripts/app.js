'use strict';
//
/**
 * @ngdoc overview
 * @name 1512App
 * @description
 * # 1512App
 *
 * Main module of the application.
 */
angular
  .module('1512App', ['ui.router']).config(function($stateProvider,$urlRouterProvider){
  	$stateProvider.state('list1',{
  		url:"/list1",
  		templateUrl:"views/list1.html",
  		controller:"list1"
  	}).state('list2',{
  		url:"/list2",
  		templateUrl:"views/list2.html",
  		controller:"list2"
  	})
  })
