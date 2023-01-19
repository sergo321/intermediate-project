let logout=document.querySelector("#logout");


logout.addEventListener("click",()=>{
    sessionStorage.clear();
    localStorage.clear();
    location.href="./auth.html"
})



// for coment


// let displayarea=document.querySelector("#displayarea");


// btnforcom.addEventListener("click", ()=>{
//     let named=nameforcom.value;
//     let maild=mailforcom.value;
//     let phoned=phoneforcom.value;
//     let adressd=adressforcom.value;
//     let subjectd=subjectforcom.value;
//     let messiged=messigeforcom.value;
//     if (named===""|| maild===""||phoned===""||adressd===""||subjectd===""||messiged===""){
//     console.log("")
//     }else {
// displayarea.innerHTML=displayarea.innerHTML+`
// <p><span>${named}</span><span>${maild}</span></p>
//         <p><span>${phoned}</span><span>${adressd}</span></p>
//         <p>${subjectd}}</p>
//         <p>${messiged}</p>
//         <button id="delated">delete</button>
// `}
// })

//