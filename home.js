var getUserDiv = document.getElementById('userDataDiv');
var getDuaDiv = document.getElementById('duaDiv');
var getName = document.getElementById('name');
var username = document.getElementById('username');
var post = document.getElementById('post');
var getText = document.getElementById('newPost');
var toFor = document.getElementById('toWhome');

// ----------Get data from LS
var name = localStorage.getItem('userName');

//-------------Show the users name
getName.innerHTML = 'Hi, ' + name.charAt(0).toUpperCase() + name.slice(1);


var getPost = localStorage.getItem('posts');

function sub() {

    var postObj = {
        name: name,
        post: getText.value,
        for: toFor.value,
    }

    if (getPost == null) {
        getPost = [];
    }
    else {
        // getPost = JSON.parse(getPost);

        // console.log('post' + postObj);

    }

    getPost.push(postObj);

    getPost = JSON.stringify(getPost);
    localStorage.setItem('posts', getPost);

window.location.reload(true);

}

// if(getPost !== null){
getPost = JSON.parse(getPost);

for (var i = 0; i < getPost.length; i++) {

    var postDiv = document.createElement('div');
    postDiv.setAttribute('id', 'postDiv');

    var nameH4 = document.createElement('h4');
    var postP = document.createElement('p');

    var propName = getPost[i].name.charAt(0).toUpperCase() + getPost[i].name.slice(1);
    var nameH4Txt = document.createTextNode(propName + ' posted a Dua for ' + getPost[i].for);
    var postPTxt = document.createTextNode(getPost[i].post);

    nameH4.appendChild(nameH4Txt);
    postP.appendChild(postPTxt);

    postDiv.appendChild(nameH4);
    postDiv.appendChild(postP);

    getDuaDiv.appendChild(postDiv);
}
// }