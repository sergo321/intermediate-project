let nameforcom=document.querySelector("#name");
let mailforcom=document.querySelector("#mail");
let phoneforcom=document.querySelector("#phone");
let adressforcom=document.querySelector("#adress");
let subjectforcom=document.querySelector("#sublect");
let messigeforcom=document.querySelector("#messige");

let btnforcom=document.querySelector("#btnforcom")





btnforcom.addEventListener("click",()=>{
    let namebase = nameforcom.value;
let mailbase=mailforcom.value;
let phonebase=phoneforcom.value;
let adressbase=adressforcom.value;
let subjectbase=subjectforcom.value;
let messigebase=messigeforcom.value;
    if (namebase===""|| mailbase===""||phonebase===""||adressbase===""||subjectbase===""||messigebase===""){
        alert("fill all value")
    }else {
     addElementInFirebase("contact", {
            name: namebase,
            email: mailbase,
            phone:phonebase,
            adress:adressbase,
            subject:subjectbase,
            messige:messigebase,
          });
         setTimeout(function clearfunction(){
            nameforcom.value="";
          mailforcom.value="";
          phoneforcom.value="";
          adressforcom.value="";
          subjectforcom.value="";
          messigeforcom.value="";},500)
    }
})

