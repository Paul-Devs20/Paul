const btn = document.querySelectorAll("#btn");
let displayScreen = document.getElementById("displayScreen");
const displayBtns = document.getElementById("displayBtns")



displayBtns.addEventListener("click", function(event){

    displayScreen.textContent += event.target.textContent;
})

function calculate(...args){
    for (let n of displayScreen.title) {
        console.log(n)
        
    }

   /*  let sum = 0;
    for (let i = 0; i < args.length; i++) {
        sum += args[i]   
    }
    console.log(sum) */

}
calculate(20,30,40,50)