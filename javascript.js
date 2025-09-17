
function adder(a,b){
    return a+b;
};
function minuer(a,b){
    return a-b;
}
function multiplier(a,b){
    return a*b;
}
function divider(a,b){
    return a/b;
}
const displayText = document.querySelector("#display-screen");
function populate(value){
  
    if(displayText.textContent !=="0" ){
        displayText.textContent += value;
    }else{
        displayText.textContent = value;
    }
    
}

const buttonNumbers = document.querySelectorAll(".number");
buttonNumbers.forEach(button => {
    button.addEventListener("click",(e) =>{
        const value=e.target.textContent;
        console.log(typeof(value));
        populate(value);
    } )
});