/**
 * Created by u on 2016/1/29.
 */
window.onload = function() {
    var oPdata = decodeURI(window.location.search).substring(1).split(",");//substr(number)是截取？后面的值
    var oP = document.getElementById("aP")
    var len = oPdata.length;
    console.log(oPdata.length);
    for( var i = 0 ; i < len ; i++){
        oP.innerHTML += (i+1)  + "号是" + oPdata[i] + "<br/>";
        console.log(oP.innerHTML);
    }
}