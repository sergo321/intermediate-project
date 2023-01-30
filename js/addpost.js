const display=document.querySelector("#display");
const remainder=document.querySelector("#remainder");
const letter=document.querySelector("#letter");
const makepost=document.querySelector("#makepost")



makepost.addEventListener("click", ()=>{
   let remaindername=remainder.value;
   let remainderletter=letter.value;
    display.innerHTML=display.innerHTML+`<div id="postwrapper">
    <p class="remaindername">${remaindername}</p>
    <p class="remainderletter">${remainderletter}</p>
  
  <button id="deleteletter" onclick="delateletter()">delate</button>
  </div>`
  remainder.value="";
  letter.value="";
})

function delateletter(){
        const postwrapper=document.querySelector("#postwrapper").remove();  
}