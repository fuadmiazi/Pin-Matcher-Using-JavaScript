function generateNumb(){
    const randNum = Math.floor(1000+ Math.random() * 9000);
    document.getElementById("random-num").value = randNum;
}

function input(num){
    var disNum = document.getElementById("display-numb").value;
    var currentNum = disNum + num;
    document.getElementById("display-numb").value = currentNum;
}

function clearNumb(){
    document.getElementById("display-numb").value = "";
}

function deleteNumb(){
    var numb = document.getElementById("display-numb").value;
    var numFloat = parseFloat(numb);
    numFloat = numFloat/10;
    var newNumb = parseInt(numFloat);
    document.getElementById("display-numb").value = newNumb;
}

function submitBtn(){
    var compareNumb = document.getElementById("random-num").value;
    var inputNumb = document.getElementById("display-numb").value;
    var tempo = compareNumb/inputNumb;
    if(tempo == 1){
        document.getElementById("pass-matched").style.display = "block";
        document.getElementById("pass-wrong").style.display = "none";
        document.getElementById("try-left").innerHTML = 3;
    }
    else{
        document.getElementById("pass-wrong").style.display = "block";
        document.getElementById("pass-matched").style.display = "none";
        var tryNum = document.getElementById("try-left").innerHTML;
        var newTry = tryNum-1;
        document.getElementById("try-left").innerHTML=newTry;
        var tryLeft = document.getElementById("try-left").innerHTML;
        if(tryLeft == 0){
            document.getElementById("submit-button").style.display = "none";
            document.getElementById("try-left").innerHTML = 0;
        }
    }
}