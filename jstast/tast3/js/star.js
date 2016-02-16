/**
 * Created by u on 2016/1/19.
 */
window.onload = function () {
    var oNum = document.getElementById("number1");//身份号码
    var oP = document.getElementById("aP");//显示身份
    var oBtn = document.getElementById("btn");//按钮
    var playerNum, killerNum, peopleNum, killer;
    var numArr = new Array();
    var plus = 0;
    oBtn.onclick = function () {
        oP.innerHTML = "";//初始显示板
        gameRule();
        if(oBtn.value == "查看日志"){
            oBtn.onclick = function (){
                window.location.href = "journal.html?"+ numArr;
                alert(window.location.href = "journal.html?"+ numArr);
            }
        }
    }

    function gameRule() {
        //alert( playerNum);测试获取到的值为？6
        playerNum = parseInt(window.location.search.substr(1));//玩家人数substr(number)是截取？后面的值
        killerNum = Math.floor(playerNum / 4);//杀手人数

        peopleNum = playerNum - killerNum;//平民人数
        if( playerNum <= 8 ){
            killerNum = 1;
        }
        allotPlayer();
        countNum();

    }

    function allotPlayer() {
        //设置numArr数组里面的值都是平民
        for (var i = 0; i < playerNum; i++) {
            numArr[i] = "平民";//设置里面的数据都是平民
        }
        for (var i = 0; i < killerNum; i++) {
            killer = Math.ceil(Math.random() * playerNum)-1;
            numArr[killer] = "杀手";//覆盖原来下标的数据
        }

        for (var i = 0; i < playerNum; i++) {
           oP.innerHTML = (plus+1) + "号是" + numArr[i] + "<br/>";//在日志板显示所有人的身份
            console.log(i);
        }
    }

    function countNum() {
        plus++;
        if (plus >= numArr.length) {
            plus = parseInt(window.location.search.substr(1));
            oNum.innerHTML = plus;
            oBtn.value = "查看日志" ;
        }else{
            oNum.innerHTML = plus;
            oBtn.value = "隐藏" + plus + "号并查看" + (plus + 1) + "号身份";
        }

    }
}