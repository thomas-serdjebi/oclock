document.addEventListener('DOMContentLoaded', (event) => {

    const display = document.getElementById('clock');
    const audio = new Audio('https://assets.mixkit.co/sfx/preview/mixkit-alarm-digital-clock-beep-989.mp3');
    audio.loop = true;
    const alarmInput = document.querySelector("input[name='alarm']");
    const setAlarm = document.getElementById('set-alarm');
    console.log(setAlarm);

    let alarmTime = null;
    let alarmTimeout = null;

    function formatTime(time) {
        if ( time < 10 ) {
            time = '0'+time;
        }

        return time;

    }




    //CREATION ET AFFICHAGE DE L'HORLOGE  ----------------------------------------

    function updateTime(){
        const date = new Date();
        const hour = date.getHours();
        const minutes = date.getMinutes();
        const seconds = date.getSeconds();

        formatTime(hour);
        formatTime(minutes);
        formatTime(seconds);

        display.innerText=`${hour}:${minutes}:${seconds}`;

    }



    //CREATION ET PARAMETRAGE DE L'ALARME  ----------------------------

    //Récupère l'heure saisie dans l'input de l'alarme
    alarmInput.addEventListener('change', (event) => {
        alarmTime = alarmInput.value ;
    })

    //Permet de set l'alarm si on appuie sur le bouton
    setAlarm.addEventListener('click', (event) => {

        //Si l'input est rempli alors...
        if(alarmTime) {
            const current = new Date();
            const timeToAlarm = new Date(alarmTime);

            //Si l'alarme est bien paramétrée pour un moment ultérieur à l'instant présent alors on paramètre l'alarme
            if(timeToAlarm > current ) {
                const timeout = timeToAlarm.getTime() - current.getTime();
                console.log(timeout);
                alarmTimeout = setTimeout(()=>audio.play(), timeout);
                alert('Alarm set');
            }



            
        }
    })





   

  

    setInterval(updateTime, 1000);

})