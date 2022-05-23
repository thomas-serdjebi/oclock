document.addEventListener('DOMContentLoaded', (event) => {
    //MINUTEUR ---------------------------------------------------------------

    console.log('bonjour');

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
            alert('Time is over');

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


