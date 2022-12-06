const firebaseConfig = {
    apiKey: "AIzaSyDOMsRMCb73HbvZkBYQdoHkIhnC7ud8rlw",
    authDomain: "wendy-s-dog-salon-e5d52.firebaseapp.com",
    databaseURL: "https://wendy-s-dog-salon-e5d52-default-rtdb.firebaseio.com",
    projectId: "wendy-s-dog-salon-e5d52",
    storageBucket: "wendy-s-dog-salon-e5d52.appspot.com",
    messagingSenderId: "204973462602",
    appId: "1:204973462602:web:449e2efc13136b43b802b3",
    measurementId: "G-G37Y70SE4G"
  };



  function randomID() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
      let r = (Math.random() * 16) | 0;
      let v = c == "x" ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  }



  firebase.initializeApp(firebaseConfig);


function generateFirebaseItem(ID, value) {
  return {
    id: ID,
    data: value
  }
}
function addElementInFirebase(REF, data) {
  firebase.database().ref(`${REF}/${randomID()}`).set(data);
}
//add user on db,go to sing in and clear inputs

const desapair=document.querySelector("#sing-in-desapiar")
// const usersArray = getRefFromFirebase("User");
// let isUserUnique = usersArray.some(user => user.data.email === userEmail);


registerbutton.addEventListener("click",()=>{
  
  if(lastname.value="" ||email.value=="" || password.value==""){
    alert("input all values")
    lastname.value="";
     email.value="";
     password.value="";
  }else if(lastname.value=""){
    addElementInFirebase("user",{
      name:lastname.value,
      email:email.value,
      password:password.value
     });
     lastname.value="";
     email.value="";
     password.value="";
     location.href="index.html"
  }else{
  registerbutton.disabled = true;
  const usersArrayUpdated = getRefFromFirebase("User");
  setTimeout(() => {
    const userIndex = usersArrayUpdated.findIndex(user =>
      user.data.email === email.value &&
      user.data.password === password.value,
    );
    if (userIndex === -1) {
     alert("no user")
    } else {
      const id = usersArrayUpdated[userIndex].id;
      sessionStorage.setItem("user_id", id);
      // location.href = "index.html";
      alert("gamovida")
    }
  }, 500);}
})


 function getRefFromFirebase(REF) {
  const result = [];
  firebase.database().ref(REF).on("value", (response) => {
    response.forEach((element) => {
      result.push(generateFirebaseItem(element.key, element.val()));
    });
  });
  return result;
}

// // /**
// //  * კონკრეტული ელემენტის დაბრუნება განშტოებიდან
// //  * @param REF - დასახალება მონაცემთა ბაზის განშტოების
// //  * @param id - განშტოებაზე არესბული ელემენტის უნიკალური იდ
// //  * @returns აბრუნებს Promise კარგ შემთხვევაში მონაცემს ცუდ შემთხვევაში "404"
// //  */
function getElementFromFirebase(REF, id) {
  const array = getRefFromFirebase(REF);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      array.forEach((element) => {
        if (element.id === id) {
          resolve(element);
        }
      });
      reject("404");
    }, 1000);
  });
}

// // /**
// //  * გავანახლოთ ინფორმაცია ფაირბეისში
// //  * @param REF - დასახალება მონაცემთა ბაზის განშტოების
// //  * @param id - განშტოებაზე არესბული ელემენტის უნიკალური იდ
// //  * @param data - განახლებული ინფორმაცია
// //  */
// function updateDataInFirebaseByID(REF, id, data) {
//   firebase.database().ref(`${REF}/${id}`).set(data);
// }

// // /**
// //  * განშტოებიდან ელემენტის ამოშლა
// //  * @param REF - დასახალება მონაცემთა ბაზის განშტოების
// //  * @param id - განშტოებაზე არესბული ელემენტის უნიკალური იდ
// //  */
// function removeElementFromFirebase(REF, id) {
//   firebase.database().ref(`${REF}/${id}`).remove();
// }

// // /**
// //  * მთლიანი განშტოების წაშლა
// //  * @param REF - დასახალება მონაცემთა ბაზის განშტოების
// //  */
// function removeRefFromFirebase(REF) {
//   firebase.database().ref(REF).remove();
// }

