/**
 * Created by u on 2016/1/15.
 */
/**
 * Created by u on 2016/1/15.
 */
window.onload = function () {
    var inNum = document.getElementById("number");  //����μ�������;
    var textAre = document.getElementById("text-area"); //����μ��߷����ɫ;
    var playerNum, killerNum, peopleNum, killer;
    var numArr = new Array();

    document.getElementById("btn").onclick = function () {
        numArr.length = Math.floor(inNum.value);//�������鳤��
        textAre.innerHTML = "";
        gameRule();//��Ϸ����
    }

    function gameRule() {
        if (inNum.value >= 6 && inNum.value < 19) {
            alert("Game start����ʼ�����ɫ");
        }
        else {
            alert("��Ϸ����涨��������Ҫ��6�ˣ����18�ˣ�����������");
        }
        playerNum = parseInt(inNum.value);//�������
        killerNum = Math.floor(playerNum / 4);//ɱ������
        peopleNum = playerNum - killerNum;//ƽ������
        allotPlayer();

        //if (playerNum === 8) killernum = 1;
        //var sum = "���һ���У�"+playerNum +"��ɱ���У�"+killerNum+"��ƽ���У�"+peopleNum;
    }

    function allotPlayer() {
        //����numArr���������ֵ����ƽ��
        for (var i = 0; i < numArr.length; i++) {
            numArr[i] = "ƽ��";
        }
        for (var i = 0; i < killerNum; i++) {
            killer = Math.ceil(Math.random() * playerNum);
            numArr[killer] = "ɱ��";

        }
        for (var i = 0; i < numArr.length; i++) {
            textAre.innerHTML += (i + 1) + "��" + numArr[i] + "<br/>";
        }
    }
}