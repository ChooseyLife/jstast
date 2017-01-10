#HTML5_Dataset简介
> 允许我们访问所有在元素上自定义的data属性 (这种属性一般以data-开头）.--[MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLElement/dataset) 

[TOC]

##遵循规则
自定义的data 属性名称转化成 DOMStringMap 的键值时会遵循下面的规则：
###转化成 DOMStringMap 

	    前缀data- 被去除(包括减号)；
	    对于每个在ASCII小写字母 a到 z前面的减号(U+002D)，减号会被去除，并且字母会转变成对应的大写字母。
	    其他字符（包含其他减号）都不发生变化

###键值转换为一个属性的名称
与此相反的转换，即将键值转换为一个属性的名称，会遵循下面的规则：

	    约束：减号在转变前一定不能紧跟一个ASCII小写字母 a 到 z之间；
    添加 data- 前缀;
	    任何ASCII大写字母 A 到 Z 将转化成一个减号紧跟对应的小写字母；
	    其他字符不会发生变化


##语法
```  javascript
string = element.dataset.camelCasedName;
element.dataset.camelCasedName = string;
```	
##兼容性
| Chrome | Firefox |   IE  | Opera 	|Safari|
| :--------:| :------:| :----: | :--: | :--:|
| 8  | 6.0  |   11   | 11.10  | 6   |

##示例

	<h2  class="food"
		data-en="Peking Duck"
		data-available
		data-ja="北京ダック"
		data-fr="Canard laqué de Pékin"
		data-de="Pekingente">
		北京烤鸭
	</h2>
``` javascript
var songd = document.querySelector("food").dataset;
var album = songd.ja;
console.log(album)
//album输出北京ダック

window.jQuery && (function($){
//get
var album = $("#music-latch").data("album");
console.log(album);
//set
$(".food").data("en","Beijing Stuffed Duck");
})(window.jQuery);
```