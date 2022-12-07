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



 function getRefFromFirebase(REF) {
  const result = [];
  firebase.database().ref(REF).on("value", (response) => {
    response.forEach((element) => {
      result.push(generateFirebaseItem(element.key, element.val()));
    });
  });
  return result;
}


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


function updateDataInFirebaseByID(REF, id, data) {
  firebase.database().ref(`${REF}/${id}`).set(data);
}


function removeElementFromFirebase(REF, id) {
  firebase.database().ref(`${REF}/${id}`).remove();
}


function removeRefFromFirebase(REF) {
  firebase.database().ref(REF).remove();
}

