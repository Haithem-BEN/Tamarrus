
// Hamburger Menu Events 
const btnHamburgerEle = document.querySelector('.btnHamburger')
const hamburgerMenu = document.querySelector('.header__mobile')
btnHamburgerEle.addEventListener('click',(e)=>{
    if (hamburgerMenu.classList.contains('open')){
        hamburgerMenu.classList.remove('open')
    } else{
        hamburgerMenu.classList.add('open')
    } 
})