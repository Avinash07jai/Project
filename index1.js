var state=true;
var arr1=[1,0,1,0,1,0,0,1,0];
var player1,player2;

function getVal(id){
    if(state)
   { document.getElementById(id).innerHTML=setIndex(id,'X');
} else{
    document.getElementById(id),innerHTML=setIndex(id,'O');
}
    console.log(arr1);
    getWin(state);
}

function setIndex(index,val)
{
    if(arr1[index]==1 || arr1[index]==0)
    {
        arr1[index]=val;
        state=!state;
    }
    else{
        alert("Not Allowed");
    }
    return arr1[index];
}

function getWin(winstatus){
    if(arr1 [0] == arr1 [1] && arr1 [1] == arr1 [2] || arr1 [3] == arr1[4] && arr1[4] == arr1 [5] || arr1[6] == arr1[7] && arr1[7] == arr1[8])
    {
        if (state==false)
        {
            alert(player1 + "Winner");
        }
        else{
            alert(player2 + "Winner");
        }
        resetArray();
    }
    else if (arr1[0] == arr1[3] && arr1[3] == arr1[6] || arr1[1] == arr1[4] && arr1[4] == arr1[7] || arr1[2] == arr1[5] && arr1[5] == arr1[8])
    {
        if(state==false)
        {
            alert(player1 + "Winner");
        }
        else{
            alert(player2 + "Winner");
        }
        resetArray();
    }
        else if(arr1[0] == arr1[4] && arr1[4] == arr1[8] || arr1[2] == arr1[4] && arr1[4] == arr1[6])
        {
            if(state==false)
            {
                alert(player1 + "Winner");
            }else{
                alert(player2 + "Winner");
            }
        resetArray();
    }
}

//Start Game

function start(){
    player1=document.querySelector("#player1").value;
    player2=document.querySelector("#player2").value;

    if(player1 =="" || player2 == "")
    {
        alert("Please Fill Player Name to Start Game");
    }
    else{
        document.querySelector("#main").style.display="none";
        document.querySelector(".game").style.display="block";
    }
}

function restart(){
    state=true;
    arr1=[1,0,1,0,1,0,0,1,0];
    for(let i=0; i<=8; i++)
    {
        document.getElementById(i).innerHTML="";
    }
}

function resetArray()
{
    arr1=[null,null,null,null,null,null,null,null,null];

}