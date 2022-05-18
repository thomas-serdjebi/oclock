document.addEventListener('DOMContentLoaded', (event) => {

    const display = document.getElementById('clock');
    const audio = new Audio('https://assets.mixkit.co/sfx/preview/mixkit-alarm-digital-clock-beep-989.mp3');
    audio.loop = true;
    const alarmInput = document.querySelector("input[name='alarm']");
    const setAlarm = document.getElementById('set-alarm');
    const clearAlarm = document.getElementById('clear-alarm');

    let alarmTime = null;
    let alarmTimeout = null;

    //CREATION ET AFFICHAGE DE L'HORLOGE  ----------------------------------------

    function updateTime(){
        let date = new Date();
        let hour = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();

        if (hour<10) {
            hour = '0'+hour
        }

        if (minutes<10) {
            minutes ='0'+ minutes
        }

        if (seconds<10) {
            seconds = '0'+ seconds
        }

        display.innerText=`${hour}:${minutes}:${seconds}`;

    }

    setInterval(updateTime, 1000);



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
                alarmTimeout = setTimeout(()=>audio.play(), timeout);
                console.log(alarmTimeout);
                alert('Alarm set');
            }
            
        }
    })

    //Permet d'unset l'alarm si on appuie sur le bouton
    clearAlarm.addEventListener('click', (event) => {
        audio.pause();

        //Reset l'alarmTimeout
        if(alarmTimeout) {
            clearTimeout(alarmTimeout);
            alert('Alarm cleared');
            console.log(alarmTimeout);
            alarmInput.value = '';
        }
        
    })

    //MINUTEUR ---------------------------------------------------------------

    var start = document.getElementById('start');
    var reset = document.getElementById('reset');
    var h = document.getElementById('hour');
    var m = document.getElementById('minute');
    var s = document.getElementById('second');

    h.value = '0' + 0;
    m.value = '0' + 0;
    s.value = '0'+ 0;





    var startTimer = null;

    function timer(){

        if(h.value == 0 && m.value == 0 && s.value == 0) {
            stopTimer() ;

        } else if ( s.value != 0) {
            s.value --;
            if ( s.value <10 ) {
                s.value = '0' + s.value
            };
            
        } else if ( m.value != 0 && s.value == 0) {
            m.value --;
            s.value = 59;
                
            if ( m.value <10 ) {
                m.value = '0' + m.value
            }
            
        } else if ( h.value != 0 && m.value == 0 && s.value == 0) {
            h.value --;
            m.value = 59;
            s.value = 59;
            if ( h.value <10 ) {
                h.value = '0' + h.value
            }
            
        } 


        

    }

    function stopTimer(){
        clearInterval(startTimer);
    }



    start.addEventListener('click', (event) => {
        //Appelle la fonction timer toutes les 1000 millisecondes soit chaque seconde
        function startInterval(){
            startTimer = setInterval(function(){
                timer(); 
            }, 1000);

        }
        startInterval();
        

    })

    
    reset.addEventListener('click', (event) => {
        h.value = '00' ;
        m.value = '00' ;
        s.value = '00' ;
        stopTimer() ;

    })









   

  

    

})