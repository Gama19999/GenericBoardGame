/*
 *  Created on : 18 oct. 2022, 16:04:32
 *  Author     : gamars
 */

let posActP1 = 1, turnsP1 = [];
let posActP2 = 1, turnsP2 = [];
 
 function girar(n) {
    if (checkWin() === -1) {
        return;
    }   
     
    const names = ["one","two","three","four","five","six"];
    let dice = document.getElementById(`dice${n}`);
    let p = document.getElementById(`number${n}Got`);
    let i = Math.trunc(Math.random() * 6);
    
    let pic = new Image();
    pic.src = `pics/dice/${names[i]}.png`;
    pic.onload = () => {
        dice.style.backgroundImage = `url('${pic.src}')`;
    };
    p.innerHTML = `Player ${n} got: ${i+1}`;
    
    switch (n) {
        case 1:
            move("alfil", (i+1));
            turnsP1.push(`T${turnsP1.length+1}: ${i+1}`);
            break;
        case 2:
            move("horse", (i+1));
            turnsP2.push(`T${turnsP1.length+1}: ${i+1}`);
            break;
    }
    
}

function move(player, diceNum) {
    const coords = {
        1 : "2,3",
        2 : "3,3",
        3 : "4,3",
        4 : "4,4",
        5 : "4,5",
        6 : "3,5",
        7 : "2,5",
        8 : "2,6",
        9 : "2,7",
        10 : "3,7",
        F : "4,7"
    };
    let tip = document.getElementById(player);
    
    if (player === "alfil") {
        if ((posActP1 + diceNum) >= 10) {
            tip.style.gridColumn = (coords["F"].split(","))[0];
            tip.style.gridRow = (coords["F"].split(","))[1];
            posActP1 = 10;
        } else {
            tip.style.gridColumn = (coords[posActP1+diceNum].split(","))[0];
            tip.style.gridRow = (coords[posActP1+diceNum].split(","))[1];
            posActP1 += diceNum;
        }
    } else {
        if ((posActP2 + diceNum) >= 10) {
            tip.style.gridColumn = (coords["F"].split(","))[0];
            tip.style.gridRow = (coords["F"].split(","))[1];
            posActP2 = 10;
        } else {
            tip.style.gridColumn = (coords[posActP2+diceNum].split(","))[0];
            tip.style.gridRow = (coords[posActP2+diceNum].split(","))[1];
            posActP2 += diceNum;
        }
    }
}

function checkWin() {
    if (posActP1 >= 10) {
        document.getElementById('winner').innerHTML = "Sorry Horse :(<br>¡Winner Alfil!";
        document.getElementById('turns').innerHTML = `Py1: ${turnsP1.toString()}<br>Py2: ${turnsP2.toString()}`;
        return -1;
    } else if (posActP2 >= 10) {
        document.getElementById('winner').innerHTML = "Sorry Alfil :(<br>¡Winner Horse!";
        document.getElementById('turns').innerHTML = `Py1: ${turnsP1.toString()}<br>Py2: ${turnsP2.toString()}`;
        return -1;
    } else {
        return 0;
    }
}

