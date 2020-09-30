const popup = document.querySelector('.popup');
const button = document.querySelector('.button');
const buttonCross = document.querySelector('.popup__close'); 
const buttonPopup = document.querySelector('.popup__button');

button.addEventListener('click' , () => {popup.setAttribute('style' , 'display: flex')})
buttonCross.addEventListener('click' , () => {popup.setAttribute('style' , 'display: none')})
popup.addEventListener('click' , (e) => {
    if (e.target.hasAttribute('id' , 'popup')) {
        popup.setAttribute('style' , 'display: none')
    }})
buttonPopup.addEventListener('click' , (event) => {
    event.preventDefault();
    popup.setAttribute('style' , 'display: none')})