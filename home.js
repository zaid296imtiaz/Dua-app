var getUserDiv = document.getElementById('userDataDiv');
var getDuaDiv = document.getElementById('duaDiv');
var getName = document.getElementById('name');
var username = document.getElementById('username');
var post = document.getElementById('post');
var getText = document.getElementById('newPost');

// ----------Get data from LS
var name = localStorage.getItem('userName');

//-------------Show the users name
getName.innerHTML = 'Hi, ' + name.charAt(0).toUpperCase() + name.slice(1); 


  var getPost = localStorage.getItem('posts');

function sub(){

    var postObj = {
        name: name,
        post: getText.value,
    }

    if(getPost == null){
        getPost = [];
    }
    else{
        getPost = JSON.parse(getPost);

        // console.log('post' + postObj);
        
    }

     getPost.push(postObj);

        getPost = JSON.stringify(getPost);
        localStorage.setItem('posts', getPost);


    
}

// if(getPost !== null){
    getPost = JSON.parse(getPost);

    for(var i = 0; i < getPost.length; i++){

    var nameH4 = document.createElement('h4');
    var postP = document.createElement('p');

    var nameH4Txt = document.createTextNode(getPost[i].name);
    var postPTxt = document.createTextNode(getPost[i].post);

    nameH4.appendChild(nameH4Txt);
    postP.appendChild(postPTxt);


    }
// }