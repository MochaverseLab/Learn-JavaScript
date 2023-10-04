let buttonName = document.getElementById("button-generate");

buttonName.onclick = function(){
    let showNumber = document.getElementById("show-number");
    showNumber.textContent = Math.random();
}