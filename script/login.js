var containerimg = document.getElementById('containerimg');
var containerbtn = document.getElementById('containerbtn');
var containerform = document.getElementById('containerform');

function login(){
        if (containerform.style.display=='none'){
                containerform.style.display='block';
                containerimg.style.height='30vh';
        } else {containerform.style.display='none'
                containerimg.style.height='60vh';}

}