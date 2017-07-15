# angular_pagination
angular_directive to provide pagination

4 parameters:
scope.option={
		count:200,
		showpage:10,
		currpage:20,
		firstpage:8
    }

count: page total num
showpage: num show 
currpage: page you are clicking
firstpage: start page num

if firstpage not in min\max determined by currage and showpage,firstpage=currpage
