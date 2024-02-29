var timer = 60;
var score = 0;
var hitrn = 0;

//EVENT BUBBLING
//jasma click garinchha tyo element ma event raise hunchha, tyo element ma bhetena bhani tesko parent element ma khojchha, tesma pani bhayena bhani tesko parent element ma listener khojchha


function increaseScore(){
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}

function getNewHit(){
    hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = hitrn;
}

function makeBubble() {
    var clutter = "";

    for (var i = 1; i <= 114; i++) {
        //math.floor le pacchadi ko decimal numbers hatauchha
        //math.random le chai 0 to 1 ko bich ma kunai random number dinchha
        //hamlai single digit chainchha bhaney math.random lai 10 le multiply garinchha
        var rn = Math.floor(Math.random() * 10);
        clutter += `<div class="bubble">${rn}</div>`;
    }

    //hamilai pbtm bhitra mathi ko code halnu chha 
    document.querySelector("#pbtm").innerHTML = clutter;
}

function runTimer() {
    var timerInt = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector("#timerval").textContent = timer;
        }
        else{
            clearInterval;
            document.querySelector("#pbtm").innerHTML = `<h1>Game Over Your Score is ${score}</h1>`;
        }
    }, 1000)
}

document.querySelector("#pbtm").addEventListener("click", function(details){
    var clickedNumber = Number(details.target.textContent);
    if(clickedNumber === hitrn){
        increaseScore();
        makeBubble();
        getNewHit();
    }
})


runTimer();
makeBubble();
getNewHit();