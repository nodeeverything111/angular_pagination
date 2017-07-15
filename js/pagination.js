angular.module('extendtool').directive('pageTool',function(){
	return{
		restrict: 'EA',
		replace:true,
		scope:{
			option: '=pageOption'
		},
		template:'<ul class="pagination">'+
				'<li ng-click="pageclick(num)" ng-repeat="num in data.array" class="{{option.currpage===num?\'active\':\'\'}}">' +
				'<a href="javascript:;" ng-bind="num"></a>'+
				'</li></ul>',
		link:function($scope){
			//给scope变量赋初始值，包括总页数、显示多少页、当前页、页码起始位置（若初始化的页码起始值不在当前页及显示页数的范围之内，以当前页为起始页）
			$scope.data={};
			$scope.option.count=$scope.option.count || 100;
			$scope.option.showpage=$scope.option.showpage || 12;
			$scope.option.currpage=$scope.option.currpage || 1;
			$scope.option.firstpage=$scope.option.firstpage || 1;
			var min = ($scope.option.currpage-$scope.option.showpage+1)<1?1:($scope.option.currpage-$scope.option.showpage+1);
			var max = ($scope.option.currpage+$scope.option.showpage-1);
			($scope.option.firstpage<min || $scope.option.firstpage>max) && ($scope.option.firstpage=$scope.option.currpage);
			/*快速生成指定区间的数组*/
			debugger;
			$scope.data.array=getArray($scope.option.showpage,$scope.option.firstpage);
			
			
			//点击页码按钮触发pageclick(num）函数，定义行为，包括更新data数据? ??调用外部定义的刷新外部页面的函数
			$scope.pageclick=function(num){
				$scope.option.currpage=num;
				
				$scope.option.click(num);
			}
			
			//点击左右按键，触发pagemove函数，更新data.array数组，及当前页
			
			//生成以当前页开始的数组
			function getArray(showpage,count){
				return Array.from({length:showpage},(v,k)=>k).map((v,k)=>(k+count))
			}
		}
	}
})