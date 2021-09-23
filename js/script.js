
// Hamburger Menu Events 
const btnHamburgerEle = document.querySelector('.btnHamburger')
const hamburgerMenu = document.querySelector('.header__mobile')
btnHamburgerEle.addEventListener('click',(e)=>{
    hamburgerMenu.classList.toggle('open') 
})
