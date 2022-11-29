let breedleft =document.querySelector(".breed-left");
let breedmadium=document.querySelector(".breed-madium");
let breedright=document.querySelector(".breed-right");

function addclassbreed (){
    breedleft.addEventListener("click", ()=>{
        breedleft.classList.add("active-underline");
        breedmadium.classList.remove("active-underline");
        breedright.classList.remove("active-underline");     
    })
    breedmadium.addEventListener("click", ()=>{
        breedleft.classList.remove("active-underline");
        breedmadium.classList.add("active-underline");
        breedright.classList.remove("active-underline");
    })
    breedright.addEventListener("click",()=>{
        breedleft.classList.remove("active-underline");
        breedmadium.classList.remove("active-underline");
        breedright.classList.add("active-underline");
    })
}