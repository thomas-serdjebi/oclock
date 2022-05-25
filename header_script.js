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

        return date;

    }

    setInterval(updateTime, 1000);

    const toggleButton = document.querySelector('.toggle-menu');
    const navBar = document.querySelector('.nav-bar');
    toggleButton.addEventListener('click', () => {
    navBar.classList.toggle('toggle');
    });



})