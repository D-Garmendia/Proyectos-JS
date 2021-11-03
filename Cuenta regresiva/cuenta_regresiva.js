window.addEventListener('load', ()=>{
    let horaHTML = document.getElementById('hora');
    let minutosHTML = document.getElementById('minutos');
    let segundosHTML = document.getElementById('segundos');
    let diasHTML = document.getElementById('dias');

    const Scaloneta = fechaScaloneta =>{
        let fecha_actual = new Date();
        let tiempo_restante= (new Date(fechaScaloneta) - fecha_actual + 1000) / 1000;
        let segundos = Math.floor(tiempo_restante % 60);
        let minutos = Math.floor(tiempo_restante / 60 % 60);
        let horas = Math.floor(tiempo_restante / 3600 % 24);
        let days = Math.floor (tiempo_restante / (3600 * 24));
        
        

        horaHTML.innerHTML = String(horas).padStart(2, "0") + "<br>" + "hs";
        minutosHTML.innerHTML = String(minutos).padStart(2, "0") + "<br>" + "mins";
        segundosHTML.innerHTML = String(segundos).padStart(2, "0") + "<br>" + "segs";
        diasHTML.innerHTML =  String(days) + "<br>" + "días"

    }
   


    // Scaloneta("Fri Nov 12 2021 20:00:00 GMT-0300")

    const timerUpdate = setInterval( () =>{
        let t = Scaloneta("Fri Nov 12 2021 20:00:00 GMT-0300")
    }, 1000)
})

