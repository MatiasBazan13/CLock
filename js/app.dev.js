const reloj = document.querySelector(".reloj");
const getHora = () => {

    const fecha = new Date;
    const tiempo = {
        hora: fecha.getHours(),
        minuto: fecha.getMinutes(),
        segundos: fecha.getSeconds(),
    };
    
    reloj.innerHTML = `${tiempo.hora} : ${tiempo.minuto} : ${tiempo.segundos}`;
}

getHora();

setInterval( getHora, 1000); 