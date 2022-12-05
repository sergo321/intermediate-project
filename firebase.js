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



  firebase.initializeApp(firebaseConfig); //დაკავშირება firebase სთან , არსებული კონფიგით

// /**
//  * ფაირბეისიდან დაბრუნებული ინფორმაციის ობიექტში გადაკეთება
//  * @param ID - უნიკალური იდ
//  * @param value - მნიშვნელობა რაც არის მონაცემთა ბაზაში
//  * @returns ვაბრუნებთ მთლიან ობიექტს სადაცა რის ID და Value
//  */
function generateFirebaseItem(ID, value) {
  return {
    id: ID,
    data: value
  }
}

// /**
//  * დავამატოთ მონაცემთა ბაზაი ელემენტი
//  * @param REF - დასახელება მონაცემთა ბაზის განშტოების
//  * @param data - ინფორმაცია რასაც ვამატებთ
//  */
function addElementInFirebase(REF, data) {
  firebase.database().ref(`${REF}/${randomID()}`).set(data);
}


addElementInFirebase("user",{
  name:"test1",
  lastname:"test2"
})

// /**
//  * მთლიანი განშტოების წამოღება ფაირბეისიდან
//  * @param REF - დასახელება მონაცემთა ბაზის განშტოების
//  * @returns აბრუნებს განშტოებაზე არსებულ ინფორმაციას
//  */
// function getRefFromFirebase(REF) {
//   const result = [];
//   firebase.database().ref(REF).on("value", (response) => {
//     response.forEach((element) => {
//       result.push(generateFirebaseItem(element.key, element.val()));
//     });
//   });
//   return result;
// }

// /**
//  * კონკრეტული ელემენტის დაბრუნება განშტოებიდან
//  * @param REF - დასახალება მონაცემთა ბაზის განშტოების
//  * @param id - განშტოებაზე არესბული ელემენტის უნიკალური იდ
//  * @returns აბრუნებს Promise კარგ შემთხვევაში მონაცემს ცუდ შემთხვევაში "404"
//  */
// function getElementFromFirebase(REF, id) {
//   const array = getArrayFromFirebase(REF);
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       array.forEach((element) => {
//         if (element.id === id) {
//           resolve(element);
//         }
//       });
//       reject("404");
//     }, 1000);
//   });
// }

// /**
//  * გავანახლოთ ინფორმაცია ფაირბეისში
//  * @param REF - დასახალება მონაცემთა ბაზის განშტოების
//  * @param id - განშტოებაზე არესბული ელემენტის უნიკალური იდ
//  * @param data - განახლებული ინფორმაცია
//  */
// function updateDataInFirebaseByID(REF, id, data) {
//   firebase.database().ref(`${REF}/${id}`).set(data);
// }

// /**
//  * განშტოებიდან ელემენტის ამოშლა
//  * @param REF - დასახალება მონაცემთა ბაზის განშტოების
//  * @param id - განშტოებაზე არესბული ელემენტის უნიკალური იდ
//  */
// function removeElementFromFirebase(REF, id) {
//   firabase.database().ref(`${REF}/${id}`).remove();
// }

// /**
//  * მთლიანი განშტოების წაშლა
//  * @param REF - დასახალება მონაცემთა ბაზის განშტოების
//  */
// function removeRefFromFirebase(REF) {
//   firebase.database().ref(REF).remove();
// }