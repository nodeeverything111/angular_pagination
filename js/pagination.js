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
			//��scope��������ʼֵ��������ҳ������ʾ����ҳ����ǰҳ��ҳ����ʼλ�ã�����ʼ����ҳ����ʼֵ���ڵ�ǰҳ����ʾҳ���ķ�Χ֮�ڣ��Ե�ǰҳΪ��ʼҳ��
			$scope.data={};
			$scope.option.count=$scope.option.count || 100;
			$scope.option.showpage=$scope.option.showpage || 12;
			$scope.option.currpage=$scope.option.currpage || 1;
			$scope.option.firstpage=$scope.option.firstpage || 1;
			var min = ($scope.option.currpage-$scope.option.showpage+1)<1?1:($scope.option.currpage-$scope.option.showpage+1);
			var max = ($scope.option.currpage+$scope.option.showpage-1);
			($scope.option.firstpage<min || $scope.option.firstpage>max) && ($scope.option.firstpage=$scope.option.currpage);
			/*��������ָ�����������*/
			debugger;
			$scope.data.array=getArray($scope.option.showpage,$scope.option.firstpage);
			
			
			//���ҳ�밴ť����pageclick(num��������������Ϊ����������data����? ??�����ⲿ�����ˢ���ⲿҳ��ĺ���
			$scope.pageclick=function(num){
				$scope.option.currpage=num;
				
				$scope.option.click(num);
			}
			
			//������Ұ���������pagemove����������data.array���飬����ǰҳ
			
			//�����Ե�ǰҳ��ʼ������
			function getArray(showpage,count){
				return Array.from({length:showpage},(v,k)=>k).map((v,k)=>(k+count))
			}
		}
	}
})