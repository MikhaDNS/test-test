let XHR = ("onload" in new XMLHttpRequest()) ? XMLHttpRequest : XDomainRequest; 
let xhr = new XHR();
let hyptext=''

function sendok(value){
if(value =='' || value==' '){
alert('Введите url')
} else {
xhr.open('GET', 'https://cors-anywhere.herokuapp.com/http://www.'+value, true); 
xhr.onprogress = function() { document.getElementById('but').innerHTML="Статус: загрузка..." }
xhr.onload = function() {
hyptext= xhr.response
document.getElementById('but').innerHTML="Статус: загружено!"
document.getElementById('but').innerHTML+='<input type="button" value="Перейти!" onclick="document.write(hyptext)" />'
}
xhr.onerror = function() { alert( `Ошибка ${xhr.status}: ${xhr.statusText}` ) } 
xhr.send();
}
}
function opend(){
window.open('https://cors-anywhere.herokuapp.com/https://google.com');
}
