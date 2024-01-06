var img = document.getElementById('containerimg');
var btn = document.getElementById('containerbtn');
var form = document.getElementById('containerform');

function login(){
        if (form.style.display=='none'){
                form.style.display='block';
                img.style.height='30vh';
        } else {form.style.display='none'
                img.style.height='60vh';}

}