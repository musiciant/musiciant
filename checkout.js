const firebaseConfig = {
    apiKey: "AIzaSyCJ73IurrDPSof0tFvhj8pLI2bltlJB_YM",
    authDomain: "cart-realtime-database.firebaseapp.com",
    databaseURL: "https://cart-realtime-database-default-rtdb.firebaseio.com",
    projectId: "cart-realtime-database",
    storageBucket: "cart-realtime-database.appspot.com",
    messagingSenderId: "275514299831",
    appId: "1:275514299831:web:31b4f0263fbeec2bbb8432"
  };
  
  // initialize firebase
  firebase.initializeApp(firebaseConfig);
  
  // reference your database
  var contactFormDB = firebase.database().ref("checkout");
  
  document.getElementById("checkout").addEventListener("submit", submitForm);
  
  function submitForm(e) {
    e.preventDefault();
  
    var fullname = getElementVal("fullname");
    var email = getElementVal("email");
    var province = getElementVal("province");
    var city = getElementVal("city");
    var barangay = getElementVal("barangay");
    var zipcode = getElementVal("zipcode");
    var num = getElementVal("num");
    var delivery = getElementVal("delivery");
    var cod = getElementVal("cod");

  
    saveMessages(fullname, email, province, city, barangay, zipcode, num, delivery, cod);
  
    //   enable alert
    document.querySelector(".alert").style.display = "block";
  
    //   remove the alert
    setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
    }, 3000);
  
    //   reset the form
    document.getElementById("checkout").reset();
  }
  
  const saveMessages = (fullname, email, province, city, barangay, zipcode, num, delivery, cod) => {
    var newContactForm = contactFormDB.push();
  
    newContactForm.set({
        fullname: fullname,
        email: email,
        province: province,
        city: city,
        barangay: barangay,
        zipcode: zipcode,
        num: num,
        delivery: delivery,
        cod: cod,

    });
  };
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };