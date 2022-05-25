document.addEventListener('DOMContentLoaded', (event) => {

    let chrono = document.getElementById('chrono');
    let startAndStop = document.getElementById('start-and-stop');
    let round = document.getElementById('round');
    let reset = document.getElementById('reset');


    let hours_field = document.getElementById('hours');
    let minutes_field =document.getElementById('minutes');
    let seconds_field = document.getElementById('seconds');
    let roundList = document.getElementById('round-list');
    console.log(roundList)

    let hours = Number(document.getElementById('hours').innerText);
    let minutes = Number(document.getElementById('minutes').innerText);
    let seconds = Number(document.getElementById('seconds').innerText);

    let isStopped = true;
    let startTimer = null;

    function timer(){
        seconds++;

        if ( seconds == 60 ) {
            minutes++; ;
            seconds = 0;
        } else if ( seconds < 10 && seconds != 0 ) {
            seconds = '0'+seconds;
        } else if ( seconds == 0 ) {
            seconds = '00';
        }

        if ( minutes == 60 ) {
            hours++;
            minutes = 0;
        } else if  ( minutes < 10 && minutes != 0 ) {
            minutes = '0'+minutes;
        } else if ( minutes == 0 ) {
            minutes = '00';
        }

        if ( hours < 10 && hours != 0) {
            hours = '0'+hours;
        } else if ( hours == 0 ) {
            hours = '00';
        }

        seconds_field.innerText = seconds;
        minutes_field.innerText = minutes;
        hours_field.innerText = hours;

        
    }

    function stopTimer(){
        clearInterval(startTimer);

    }

    function resetTimer(){
        stopTimer();
        hours_field.innerText = '00';
        minutes_field.innerText = '00';
        seconds_field.innerText = '00';
        isStopped = true;

    }

    function roundListing (){
        let li = document.createElement('li');
        roundList.appendChild(li);
        li.innerText = hours + ':'+ minutes + ':' + seconds;
        

    }

    function startOrStop (){
        if ( isStopped == true) {
            startAndStop.innerText = 'Start';
            startAndStop.setAttribute('class', 'button-blue')
        } else {
            startAndStop.innerText = 'Stop';
            startAndStop.setAttribute('class', 'button-red')
        }
    }



    startAndStop.addEventListener( 'click', (event)=> {
        
        if (isStopped == true ) { 
            isStopped = false;
            timer();
            startTimer = setInterval(timer, 1000);

        } else {
            isStopped = true;
            stopTimer();
            
        }

        startOrStop();

    })

    reset.addEventListener('click', (event) => {
        resetTimer();
        startOrStop();
        roundList.innerHTML='';
        
        
    })

    round.addEventListener('click', (event) => {
        if (isStopped == false) {
            roundListing();
        }
    })



  







    

})