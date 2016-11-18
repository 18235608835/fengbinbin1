 angular.module("1512App",[])
  .controller("con",function($scope,$http,fuwu){
	fuwu.ajax('http://www.somenote.cn:1510/test','get',function(data){
		$scope.data=data
	})
	fuwu.ajax('http://www.somenote.cn:1510/test2','get',function(data1){
		$scope.data1=data1
	})
	fuwu.ajax('http://www.somenote.cn:1510/aut','get',function(data2){
		$scope.data2=data2
	})
})
.directive("fbb",function(){
	return{
		restrict:'AEMC', 
		template:'<div class="da"><li ng-repeat="x in d">{{x.title | fil}}<><li ng-repeat="c in x">{{c.title | fil}}<></div><div class="center"><img  ng-repeat="t in s" ng-src="{{t.img}}" /></div>',
		scope:true,
		transclude: true,
		scope:{d:"=data",s:"=data2",x:"=data1"},
		link:function(s,e,attr){
			s.a=attr['b']
		}
		
	}
})
.filter("fil",function(){
	return function(e) {
		if(e.length>8){
			return e.substring(0,8)+'....'
		}else{
			return e
		}
	}
})
.service('fuwu',function($http){
	return{
		ajax:function(url,method,callback){
			$http({
				url:url,
				method:method
			}).success(function(e){
				callback(e)
			})
		}
	}
})
