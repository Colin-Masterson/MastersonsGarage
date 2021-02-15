
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

// let recovery = document.querySelector('.recovery')
// let repair = document.querySelector('.repairs')
// let painting = document.querySelector('.painting')
// let batteries = document.querySelector('.batteries')

// recovery.addEventListener('mouseover', () =>{
    
// })
// repair.addEventListener('mouseover', () =>{
   
// })
// painting.addEventListener('mouseover', () =>{
   
// })
// batteries.addEventListener('mouseover', () =>{
    
// })