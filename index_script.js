document.addEventListener('DOMContentLoaded', (event) => {

    //TYPING EFFECT


    var title = document.querySelector('h1');
    var title2 = document.querySelector('h2');
    var title3 = document.querySelector('h3');
    var countdown = document.getElementById('countdown');
    console.log(countdown)
    var chronometer = document.getElementById('chronometer');
    var alarm = document.getElementById('alarm');
    
    function typeWriter(element) {
        const textArray = element.innerHTML.split('');
        element.setAttribute('class', 'displayed')
        element.innerHTML = '';
        textArray.forEach((letter, i) =>
        setTimeout(() => (element.innerHTML += letter), 50 * i)
        );
        setInterval(() => typeWriter(element), 100000);
    }

    function display(element) {
        element.setAttribute('class', 'displayed');
    }

    typeWriter(title);

    setTimeout(() => {
        typeWriter(title2);
    }, 1500);

    setTimeout(() => {
        typeWriter(title3);
    }, 2800);

    setTimeout(() => {
        display(countdown);
    }, 4000);

    setTimeout(() => {
        display(chronometer);
    }, 4500);

    setTimeout(() => {
        display(alarm);
    }, 5000);
    


    
    

})