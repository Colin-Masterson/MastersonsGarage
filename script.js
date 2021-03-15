
//Transparent Nav 
window.onscroll = function(ev) {
    let nav = document.querySelector('.header')
    if (window.scrollY == 0) {
        nav.classList.remove('scrolled')
        nav.classList.add('top')
    }
    else{
        nav.classList.remove('top')
        nav.classList.add('scrolled')
    }
};

