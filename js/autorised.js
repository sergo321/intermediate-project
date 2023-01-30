let logout=document.querySelector("#logout");


logout.addEventListener("click",()=>{
    sessionStorage.clear();
    localStorage.clear();
    location.href="./auth.html"
})



