function reloj(){
    let horas = document.getElementById('hora');
    let minutos = document.getElementById('minutos');
    let segundos = document.getElementById('segundos');
    let ampm = document.getElementById('ampm');
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    var am = 'AM'
    if(h > 12){
        h = h-12;
        var am = 'PM';
    }
    h = (h < 10) ? '0' + h : h;
    m = (m < 10) ? '0' + m : m;
    s = (s < 10) ? '0' + s : s;
    horas.innerHTML = h;
    minutos.innerHTML = m;
    segundos.innerHTML = s;
    ampm.innerHTML = am;
}
var intervalo = setInterval(reloj,1000)
