/**
 * Created by u on 2016/1/6.
 */
//setTimeout
var colors = new Array("#cb4042","#ffc408","#3a8fb7");
var oUl = document.getElementById("change");
var allLi=oUl.getElementsByTagName("li");
var len = allLi.length;
var  num = 1;
function changeColor(){
    //var colorIndex = Math.round(Math.random()*2);
    var color_li=colors[Math.round(Math.random()*2)];
    for(var i = 0 ; i <= len; i++){
        allLi[i] .style.background=color_li;
    }
    allLi[ num - 1] .style.background="";
    //document.wirte(colorIndex);
    setInterval("changeColor()",1000);
}
