const userInput = document.getElementById("userInput");
const toFahrenheitt = document.getElementById("toFahrenheit");
const toDegrees = document.getElementById("toDegrees");
const result = document.getElementById("result");
let temp;

function convert(){

    if(toFahrenheitt.checked){
        //some code
        temp = Number(userInput.value);
        result.textContent = Math.floor(temp * 1.8 +32) + "\u2109";
    }
    else if(toDegrees.checked){
        //some code
        temp = Number(userInput.value);
        result.textContent = Math.round((temp - 32) * 5/9) + "\u00B0";
    }
    else{
        result.textContent = 'Please select a Unit';
    }
    
}

function Reset(){
    result.textContent = "";
}