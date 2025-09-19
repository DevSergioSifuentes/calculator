
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

const pointButton = document.querySelector("#numberpoint");

function populate(value){


    if(displayText.textContent === "undefined" || 
        displayText.textContent === "error"){
        clear();
    }
    if(value === "."){
        pointButton.disabled = true;
    }else{
        if(parseInt(value) !== parseFloat(value)){
            
            value= parseFloat(value).toFixed(2).toString();
    }
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
    pointButton.disabled = false;
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
const backspaceButton =document.querySelector("#backspace");


plusButton.addEventListener("click",() => {
    pointButton.disabled = false;
    if(firstPassOperation ===false){
        operate();
    }
    firstPassOperation =true;
    operator ="+";
    firstNum = displayText.textContent; 
})

minusButton.addEventListener("click",() => {
    pointButton.disabled = false;
    if(firstPassOperation ===false){
        operate();
    }
    firstPassOperation =true;
    operator ="-";
    firstNum = displayText.textContent; 
})
multiplyButton.addEventListener("click",() => {
    pointButton.disabled = false;
    if(firstPassOperation ===false){
        operate();
    }
    firstPassOperation =true;
    operator ="x";
    firstNum = displayText.textContent; 
})
divideButton.addEventListener("click",() => {
    pointButton.disabled = false;
    if(firstPassOperation ===false){
        operate();
    }
    firstPassOperation =true;
    operator ="d";
    firstNum = displayText.textContent; 
})

equalButton.addEventListener("click",operate);

backspaceButton.addEventListener("click",() =>{
    if(displayText.textContent.length === 1){
        displayText.textContent ="0";
    }else{
        let current=displayText.textContent;
        displayText.textContent =current.slice(0,current.length-1);
    }
});

document.addEventListener("keydown",(e) =>{
    if(Number.isInteger(parseInt(e.key)) || e.key === "."){
         populate(e.key);
    }else{
        switch(e.key){
            case "+":
                pointButton.disabled = false;
                if(firstPassOperation ===false){
                    operate();
                }
                firstPassOperation =true;
                operator ="+";
                firstNum = displayText.textContent; 
                break;
            case "-":
                pointButton.disabled = false;
                if(firstPassOperation ===false){
                    operate();
                }
                firstPassOperation =true;
                operator ="-";
                firstNum = displayText.textContent; 
                break;
            case "*":
                pointButton.disabled = false;
                if(firstPassOperation ===false){
                    operate();
                }
                firstPassOperation =true;
                operator ="x";
                firstNum = displayText.textContent; 
                break;
            case "/":
                pointButton.disabled = false;
                if(firstPassOperation ===false){
                    operate();
                }
                firstPassOperation =true;
                operator ="d";
                firstNum = displayText.textContent; 
                break;
            case "Enter":
                operate();
                break;
            case "Backspace":
                if(displayText.textContent.length === 1){
                    displayText.textContent ="0";
                }else{
                    let current=displayText.textContent;
                    displayText.textContent =current.slice(0,current.length-1);
                }
                break;
            case "Delete":
                clear();
                break;
        }
    }
       
} )