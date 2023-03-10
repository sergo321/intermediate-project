let logout=document.querySelector("#logout");


logout.addEventListener("click",()=>{
    sessionStorage.clear();
    localStorage.clear();
    location.href="./auth.html"
})




const contactname=document.querySelector("#name");
const contactmail=document.querySelector("#mail");
const contactphone=document.querySelector("#phone");
const contactadress=document.querySelector("#adress");
const contactsublect=document.querySelector("#sublect");
const contactmessige=document.querySelector("#messige");
const contactbtncom=document.querySelector("#btncom");


contactbtncom.addEventListener("click",()=>{
    let contactnameb = contactname.value;
    let contactmailb = contactmail.value;
    let contactphoneb = contactphone.value;
    let contactadressb=contactadress.value;    
    let contactsublectb=contactsublect.value;
    let contactmessigeb=contactmessige.value;

     if (contactnameb === "" || contactmailb === "" || contactphoneb === "" ||contactadressb===""||contactsublectb===""||contactmessigeb==="") {
       displayToast("Faile, Fill every input", "error", "red");
     } else {
       displayToast("information sent", "success", "green");
       addElementInFirebase("contact", {
         name: contactnameb,
         email: contactmailb,
         phone: contactphoneb,
         address:contactadressb,
         subject:contactsublectb,
         messige:contactmessigeb,
       });
    contactname.value="";
    contactmail.value="";
    contactphone.value="";
    contactadress.value="";    
    contactsublect.value="";
    contactmessige.value="";
     };
    })
   


