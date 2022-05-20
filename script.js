document.addEventListener('DOMContentLoaded', (event) => {

    //CREATION ET AFFICHAGE DE L'HORLOGE  ----------------------------------------

    const display = document.getElementById('clock');

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

    const audio = new Audio('https://assets.mixkit.co/sfx/preview/mixkit-alarm-digital-clock-beep-989.mp3');
    audio.loop = true;
    const alarmInput = document.querySelector("input[name='alarm']");
    const setAlarm = document.getElementById('set-alarm');
    const clearAlarm = document.getElementById('clear-alarm');
    const alarmList = document.getElementById('alarm-list');


    let alarmTime = null;
    let alarmTimeout = null;

    //Récupère l'heure saisie dans l'input de l'alarme
    alarmInput.addEventListener('change', (event) => {
        alarmTime = alarmInput.value ;
    })

    let hoursLeft = 0;
    let minutesLeft = 0;
    let secondsLeft = 0;

    //Permet de set l'alarm si on appuie sur le bouton
    setAlarm.addEventListener('click', (event) => {

        //Si l'input est rempli alors...
        if(alarmTime) {
            const current = new Date();
            const timeToAlarm = new Date(alarmTime);
            const li = document.createElement('li');
            const frDateToAlarm = timeToAlarm.toLocaleDateString('fr');
            const frTimeToAlarm = timeToAlarm.toLocaleTimeString('fr');
            const alarmText = document.getElementById('alarm-text');

            //Si l'alarme est bien paramétrée pour un moment ultérieur à l'instant présent alors on paramètre l'alarme
            if(timeToAlarm > current ) {
                const timeout = timeToAlarm.getTime() - current.getTime();
                let hoursLeft = Math.trunc((timeout / 1000 / 60 / 60));
                let minutesLeft = Math.trunc((timeout / 1000 / 60) - (hoursLeft*60))
                let secondsLeft = Math.trunc((timeout / 1000 ) - (hoursLeft*60*60) - (minutesLeft*60))
                alarmList.appendChild(li);
                li.setAttribute('class', 'alarm-element');
                li.append(alarmText.value + ' : ' + frDateToAlarm + ' '+ frTimeToAlarm + ' dans '+hoursLeft+ ' heures, '+minutesLeft + ' minutes, '+secondsLeft + ' secondes' );

                function alarmTimer(){

                    if ( secondsLeft != 0) {
                        secondsLeft --;
            
                    } else if ( minutesLeft != 0 && secondsLeft == 0) {
                        minutesLeft --;
                        secondsLeft = 59;
                        
                    } else if ( hoursLeft != 0 && minutesLeft == 0 && secondsLeft == 0) {
                        hoursLeft --;
                        minutesLeft= 59;
                        secondsLeft = 59;
                        
                    } 
            
                   
                    li.innerText = alarmText.value + ' : ' + frDateToAlarm + ' '+ frTimeToAlarm + ' dans '+hoursLeft+ ' heures, '+minutesLeft + ' minutes, '+secondsLeft + ' secondes' ;

                    if(hoursLeft == 0 && minutesLeft == 0 && secondsLeft == 0) {

                        li.innerText = alarmText.value + ' : ' + frDateToAlarm + ' '+ frTimeToAlarm + ' passée ! ';
                    }

            
                } 
                


                setInterval(alarmTimer, 1000);


                alarmTimeout = setTimeout(()=>audio.play(), timeout);
                alert(alarmText.value);
            } else {
                alert("");
            }
        
            
        }
    })

  


    //Permet d'unset l'alarm si on appuie sur le bouton
    clearAlarm.addEventListener('click', (event) => {
        audio.pause();

        
    })

    
    








   

  

    

})