document.addEventListener('DOMContentLoaded', (event) => {

    //TYPING EFFECT

    var i = 0;
    var h1 = document.querySelector('h1');
    var h1_text = ["W", "e", "l", "c","o","m","e" , "&nbsp; ", "t", "o", "&nbsp;" , "H", "i","g", "h",  "T", "i", "m", "e"]
    var speed = 50;

    h1.innerText ='';

    function typeWritter(h1_text) {
        if (i < h1_text.length) {
            let h1Text = h1_text[i]
            h1.innerHTML += h1Text;
            i++;
            setTimeout(typeWritter, speed);
        }

    }

    typeWritter();



    

})