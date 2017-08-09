// ----------------Get textfields from Sign In
var getNameSign = document.getElementById('nameSign');
var getEmailSign = document.getElementById('emailSign');
var getPassSign = document.getElementById('passSign');


//-------------------------------SignUp Function------------------------
function signUp() {
    //-----------Dont allow empty
    if(getNameSign.value === '' || getNameSign.value == ' ' || getEmailSign.value === '' || getEmailSign.value == ' ' || getPassSign.value === '' || getPassSign.value == ' '){
        alert('Please fill the required fields');
    }
    else{
        // ----------Get data from LS
    var users = localStorage.getItem('user');
    var userCheck = false;

    //----------Check if empty
    if (users == null) {
        users = [];
    }
    else {
        users = JSON.parse(users);
    }

    //--------------Create users object
    var userObj = {
        uName: getNameSign.value,
        email: getEmailSign.value,
        password: getPassSign.value,
    }

    //------------Check user already exist
    for (var i = 0; i < users.length; i++) {
        if (users[i].email == getEmailSign.value) {
            userCheck = true;
        }
    }
    if (userCheck == true) {
        alert('This User Already Exists! Please Login.');
    }
    else {
        users.push(userObj);
        // getNameSign = getNameSign.toString();
        // getNameSign = getNameSign.charAt(0).toUpperCase() + getNameSign.slice(1);
        console.log(getNameSign.value); 
        localStorage.setItem('userName', getNameSign.value);
        users = JSON.stringify(users);
        localStorage.setItem('user', users);
        window.open('home.html', '_self');

    }
    }

    
}




//-------------Get Login textfiels
var getEmailLogin = document.getElementById('emailLogin');
var getPassLogin = document.getElementById('passLogin');

//---------------------------Login Function------------------------
function login() {


    var users = localStorage.getItem('user');

    if (users === null) {

        users = [];

    }

    else {

        users = JSON.parse(users);

    }

    var authantication = false;



    for (var i = 0; i < users.length; i++) {

        if (users[i].email === getEmailLogin.value && users[i].password === getPassLogin.value) {

            authantication = true;
            var sliceUser = users[i].uName;
            sliceUser = sliceUser;
            var userName = localStorage.setItem('userName', sliceUser);
            console.log(sliceUser);
            break;

        }

    }

     if (authantication == false) {

        alert('Email or Password incorrect!');

    } else if(authantication == true){
        window.open('home.html', '_self');
    }
}

