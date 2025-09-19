
function adder(a,b){
    return (a+b).toString();
};
function minuer(a,b){
    return (a-b).toString();
}
function multiplier(a,b){
    return (a*b).toString();
}
function divider(a,b){
    if(b===0){
       secondNum="";
       operator ="";
       console.log("Im entering");
       console.log(operator);
       return "undefined"
       
    }else{
        console.log("I´m dividing");
        return (a/b).toString();
        
    }
    
}
const displayText = document.querySelector("#display-screen");

let operator="";
let firstNum="";
let secondNum="";

let firstPassOperation = true;

function populate(value){
        if(displayText.textContent === "undefined" || 
        displayText.textContent === "error"){
        clear();
    }
    if(parseInt(value) !== parseFloat(value)){
        console.log(value);
        console.log(parseFloat(value).toFixed(2).toString());
        value= parseFloat(value).toFixed(2).toString();
    }
    if(operator !=="" && firstNum !=="" && 
        firstPassOperation ===true ){
        displayText.textContent = "";  
        firstPassOperation =false;
    }

    if(displayText.textContent.length === 1 && 
        displayText.textContent == "0"){
        displayText.textContent = "";
    }
    if(parseFloat(value) > 999999999){
        displayText.textContent = "error";
    }
    else if(displayText.textContent.length === 9){
        displayText.textContent = displayText.textContent;
    }else{
        displayText.textContent += value;
        
    }
}

function operate(){
    if(operator !== ""){    
        secondNum=displayText.textContent;
        let firstNumValue = parseFloat(firstNum);
        let secondNumValue = parseFloat(secondNum);

        let result = "";
        
        switch(operator){
            case "+":
                result = adder(firstNumValue,secondNumValue);
                break;
            case "-":
                result = minuer(firstNumValue,secondNumValue);
                break;
            case "x":
                result = multiplier(firstNumValue,secondNumValue);
                break;
            case "d":
                result = divider(firstNumValue,secondNumValue);
                break;
            default:
                //
        }
        displayText.textContent = "";
        if(result !== "undefined"){
            populate(result);
        }else{
            displayText.textContent = "undefined";
        }
        firstPassOperation = true;
    }
}

function clear(){
    displayText.textContent = "";
    displayText.textContent ="0";
    operator="";
    firstNum="";
    secondNum="";
}

const buttonNumbers = document.querySelectorAll(".number");
buttonNumbers.forEach(button => {
    button.addEventListener("click",(e) =>{
        const value=e.target.value;
        populate(value);
    } )
});

const clearButton = document.querySelector("#clear");
clearButton.addEventListener("click",clear);

const plusButton =document.querySelector("#plus");
const minusButton =document.querySelector("#minus");
const multiplyButton =document.querySelector("#multiply");
const divideButton =document.querySelector("#divide");
const equalButton =document.querySelector("#equal");

plusButton.addEventListener("click",() => {
    if(firstPassOperation ===false){
        operate();
    }
    firstPassOperation =true;
    operator ="+";
    firstNum = displayText.textContent; 
})

minusButton.addEventListener("click",() => {
    if(firstPassOperation ===false){
        operate();
    }
    firstPassOperation =true;
    operator ="-";
    firstNum = displayText.textContent; 
})
multiplyButton.addEventListener("click",() => {
    if(firstPassOperation ===false){
        operate();
    }
    firstPassOperation =true;
    operator ="x";
    firstNum = displayText.textContent; 
})
divideButton.addEventListener("click",() => {
    if(firstPassOperation ===false){
        operate();
    }
    firstPassOperation =true;
    operator ="d";
    firstNum = displayText.textContent; 
})

equalButton.addEventListener("click",operate);