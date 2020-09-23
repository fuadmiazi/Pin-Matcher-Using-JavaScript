function generateNumb(){
    const randNum = Math.floor(1000+ Math.random() * 9000);
    console.log(randNum);
    document.getElementById("random-num").value = randNum;
}

function input(num){
    var disNum = document.getElementById("display-numb").value;
    var currentNum = disNum + num;
    document.getElementById("display-numb").value = currentNum;
}