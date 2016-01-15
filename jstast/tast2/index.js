/**
 * Created by u on 2016/1/15.
 */
/**
 * Created by u on 2016/1/15.
 */
window.onload = function () {
    var inNum = document.getElementById("number");  //输入参加人数表单;
    var textAre = document.getElementById("text-area"); //输出参加者分配角色;
    var playerNum, killerNum, peopleNum, killer;
    var numArr = new Array();

    document.getElementById("btn").onclick = function () {
        numArr.length = Math.floor(inNum.value);//设置数组长度
        textAre.innerHTML = "";
        gameRule();//游戏规则
    }

    function gameRule() {
        if (inNum.value >= 6 && inNum.value < 19) {
            alert("Game start，开始分配角色");
        }
        else {
            alert("游戏规则规定人数最少要有6人，最多18人，请重新输入");
        }
        playerNum = parseInt(inNum.value);//玩家人数
        killerNum = Math.floor(playerNum / 4);//杀手人数
        peopleNum = playerNum - killerNum;//平民人数
        allotPlayer();

        //if (playerNum === 8) killernum = 1;
        //var sum = "玩家一共有："+playerNum +"，杀手有："+killerNum+"，平民有："+peopleNum;
    }

    function allotPlayer() {
        //设置numArr数组里面的值都是平民
        for (var i = 0; i < numArr.length; i++) {
            numArr[i] = "平民";
        }
        for (var i = 0; i < killerNum; i++) {
            killer = Math.ceil(Math.random() * playerNum);
            numArr[killer] = "杀手";

        }
        for (var i = 0; i < numArr.length; i++) {
            textAre.innerHTML += (i + 1) + "号" + numArr[i] + "<br/>";
        }
    }
}