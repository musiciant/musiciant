const firebaseConfig = {
    apiKey: "AIzaSyBfC_f-9nXv0kHQ8RxolzoEHRu8nf9VJDM",
    authDomain: "contact-form-fc21c.firebaseapp.com",
    databaseURL: "https://contact-form-fc21c-default-rtdb.firebaseio.com",
    projectId: "contact-form-fc21c",
    storageBucket: "contact-form-fc21c.appspot.com",
    messagingSenderId: "21655030734",
    appId: "1:21655030734:web:6e45e3c755f2e7945c799f"
  };
  
  // initialize firebase
  firebase.initializeApp(firebaseConfig);
  
  // reference your database
  var contactFormDB = firebase.database().ref("contact");
  
  document.getElementById("contact").addEventListener("submit", submitForm);
  
  function submitForm(e) {
    e.preventDefault();
  
    var name = getElementVal("name");
    var emailid = getElementVal("emailid");
    var phone = getElementVal("phone");
    var msgContent = getElementVal("msgContent");
  
    saveMessages(name, emailid, phone, msgContent);
  
    //   enable alert
    document.querySelector(".alert").style.display = "block";
  
    //   remove the alert
    setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
    }, 3000);
  
    //   reset the form
    document.getElementById("contact").reset();
  }
  
  const saveMessages = (name, emailid, phone, msgContent) => {
    var newContactForm = contactFormDB.push();
  
    newContactForm.set({
      name: name,
      emailid: emailid,
      phone: phone,
      msgContent: msgContent,
    });
  };
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };