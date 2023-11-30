
var msgcookies = document.getElementById('cookies')

function aceito(){
    localStorage.lgpd = "sim" 
    msgcookies.classList.remove('mostrar')
}

if(localStorage.lgpd == 'sim'){
    msgcookies.classList.remove('mostrar')
}else{
    msgcookies.classList.add('mostrar')
}
