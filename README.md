# minijQuery
### 迷你库

**miniJQuery**是一个小型的封装函数存放库

### 1.十六进制颜色值

* 该函数会返回一个**随机的**十六进制颜色值，需要一个变量来接收

``` 
function randomColor(){
	var datas = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]
	var colour = "#"
	for(var a=0;a<6;a++){
		colour = colour + datas[Math.floor(Math.random()*16)]
	}
	return colour
}
```

### 2.查询元素节点

* 该函数期望接收
一个参数，返回node节点或nodeLIst
* 该参数为:标准的css选择器或标签名(string类型)

```
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
```

### 3.事件绑定

* 该函数期望传入三个参数
* 参数1.   要枚举的元素集合，
* 参数2.   要绑定的事件，
* 参数3.   要
做的事情
* bindEvent(捆绑事件)

``` 
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
```

### 4.实现insertAfter

* 该函数期待传入两个参数
* 参数1. ne
wElement (要参入的元素节点)
* 参数2. location (要插入的位置节点)

```
function insertAfter(newElement,location){
	var parent=location.parentNode
	if (parent.lastChild == location){
		parent.appendChild(newElement)
	}
	else{
		parent.insertBefore(newElement,location.nextSibling)
	}
}
```

### 5.重新实现nextSibling

* 该函数期望传入一个node节点,返回离它最近的下一个兄弟元素节点

```
function nextBrotherNode(brother){
	while(brother.nextSibling.nodeType!=1){
		brother = brother.nextSibling
		if(brother.nextSibling.nodeType==1){
			return brother.nextSibling
		}
	}
}
```

### 6.寻找子元素节点

* 该函数期望传入一个node节点，返回该节点里面的所有子元素节点

```
function sunchild(sun){
	for(var a=0;a<sun.childNodes.length;a++){
		if(sun.childNodes[a].nodeType==1){
			console.log(sun.childNodes[a])
		}
	}
}
```

