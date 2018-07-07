/*Viev more section*/

//button
const header__icon = document.getElementById('header__icon');
const viewMore__button = document.querySelector('.header__view-more__button');
//section
const viewMore = document.getElementById('header__view-more');



const viewMoreActive = () => {
    viewMore.classList.toggle('header__view-more--active');
    console.log('123');
}

header__icon.addEventListener('click', viewMoreActive);
viewMore__button.addEventListener('click', viewMoreActive);
//END View more section