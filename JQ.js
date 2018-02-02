
// 该函数返回一个十六进制的颜色值,用一个变量来接收这个函数即可
function randomColor(){
	var datas = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]
	var tiqu = "#"
	for(var a=0;a<6;a++){
		tiqu = tiqu + datas[Math.floor(Math.random()*16)]
	}
	return tiqu
}




//查找元素
//该函数期望传入一个带有字符串的（选择器 / 标签名）
function getAll(all){
	var age = all.slice(1)
	var result;
	if(all[0] == "#"){
		result =  document.getElementById(age)
	}
	if(all[0] == "."){
		result =  document.getElementsByClassName(age)
	}
	if(all[0] != "#"&&all[0] != "."){
		result =  document.getElementsByTagName(all)
	}
	if(!result || result.length == 0){
		result =  "你传入的参数既不是ID选择器,也不是class选择器,更不是标签"
	}
	return result;
}




//绑定事件
// 该函数期望传入三个参数
// 参数1.   要枚举的类数组，
// 参数2.   要绑定的事件，
// 参数3.   要做的事情
// bindEvent(捆绑事件)

function bindEvent(){
	for(var b=0;b<arguments.length;b++){
		if(typeof arguments[b] == "object"){
			var x = arguments[b]
		}
		if(typeof arguments[b] == "string"){
			var y = arguments[b]
		}
		if(typeof arguments[b] == "function"){
			var z = arguments[b]
		}
	}
	for(var a=0;a<x.length;a++){
		x[a][y] = z	
	}
}




//*******操作节点********
// 该函数期望传入一个node节点
// 找到距离他最近的下一个兄弟元素节点
function nextBrotherNode(brother){
	while(brother.nextSibling.nodeType!=1){
		brother = brother.nextSibling
		if(brother.nextSibling.nodeType==1){
			return brother.nextSibling
		}
	}
}



// 该函数期望传入一个node节点
// 找到该节点里面的所有子元素节点
function sunchild(sun){
	for(var a=0;a<sun.childNodes.length;a++){
		if(sun.childNodes[a].nodeType==1){
			console.log(sun.childNodes[a])
		}
	}
}




/*****************貌似有点儿小问题，找不到<script>以后的兄弟元素节点******************/
// 该函数期望传入两个参数,
// 第一个：一个node节点，一个该节点的的class类名，
// 找到该节点以下的所有的兄弟元素节点

function nextborther(obj,names){
	console.log(obj.parentNode.childNodes)
	// 找到该节点的父级元素,再循环找出当前传入该节点的下标
	for(var b=0;b<obj.parentNode.childNodes.length;b++){
		//通过该节点的class类名判断
		if(obj.parentNode.childNodes[b].className==names){
			var x=b     //该节点的下标
		}
	}
	// 取得下标值x,赋值给变量i,从当前下标开始往下循环找到所有符合条件的元素
	for(var i=x+1;i<obj.parentNode.childNodes.length;i++){

		if(obj.parentNode.childNodes[i].nodeType==1||obj.parentNode.childNodes[i].nodeType==9){
			console.log(obj.parentNode.childNodes[i])
		}
	}
}