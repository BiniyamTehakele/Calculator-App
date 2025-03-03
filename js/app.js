const displayer = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const specialChar = ["%", "*", "/", "-", "+", "="];
let output = "";

const calculate=(btnVal)=> {
  if (btnVal === "=" && btnVal !== "") {
    output = eval(output.replace("%", "/100"));
  }else if(btnVal==="AC"){
    output="";
  }else if(btnVal==="DE"){
    output=output.toString().slice(0,-1);
  }else{
    if(output==="" && specialChar.includes(btnVal)) return;
    output=output+btnVal;
  }
  displayer.value=output;
}

buttons.forEach(function (button) {
  button.addEventListener("click", function (e) {
    calculate(e.target.dataset.value);
  });
});
