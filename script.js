function sendok(){
 let XHR = ("onload" in new XMLHttpRequest()) ? XMLHttpRequest : XDomainRequest; 
let xhr = new XHR();
  xhr.open('GET', 'https://cors-anywhere.herokuapp.com/https://google.com', true); 
xhr.onprogress = function(event) {
  alert( 'Получено с сервера ' + event.loaded + ' байт из ' + event.total );
}
xhr.onload = function() {document.write(xhr.response) }
xhr.onerror = function() { alert( `Ошибка ${xhr.status}: ${xhr.statusText}` ) } 
xhr.send();

}
