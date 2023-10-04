// copy text
let inputText = document.getElementById("input-text");
let copyText = document.getElementById("copy-text");

inputText.addEventListener("input", function(e){
    copyText.textContent = e.target.value;
})


// clear button
let clearText = document.getElementById("clear");

clearText.addEventListener("click", function(){
    copyText.textContent = "";
    inputText.value = "";
})