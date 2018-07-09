/***Viev more section***/

//button
const header__icon = document.getElementById('header__icon');
const viewMore__button = document.querySelector('.header__view-more__button');
//section
const viewMore = document.getElementById('header__view-more');



const viewMoreActive = () => {
    viewMore.classList.toggle('header__view-more--active');
}

header__icon.addEventListener('click', viewMoreActive);
viewMore__button.addEventListener('click', viewMoreActive);
/***END Viev more section***/

/***Button panel section***/
const buttonPanel__prev = document.querySelector('.button-panel__prev');
const buttonPanel__next = document.querySelector('.button-panel__next');


const songNavActivePrev = () => {
    buttonPanel__prev.classList.add('button-panel__song-nav--active');
}
const songNavActiveNext = () => {
    buttonPanel__next.classList.add('button-panel__song-nav--active');
}


buttonPanel__prev.addEventListener('click', songNavActivePrev);
buttonPanel__next.addEventListener('click', songNavActiveNext);

//Remove class ACTIVE
function removeTransition (e) {
    if (e.propertyName !== 'transform') return; //skip if it's not transform
    this.classList.remove('button-panel__song-nav--active');
}

buttonPanel__prev.addEventListener('transitionend', removeTransition);
buttonPanel__next.addEventListener('transitionend', removeTransition);

/*END Button panel section*/

/*PlayList section*/
const playlist = document.querySelector('.playlist');
const bottomPanel__icon = document.querySelector('.bottom-panel__icon');
const playlist__header__button = document.querySelector('.playlist__header__button');

const playListActive = () => {
    playlist.classList.toggle('playlist--active');
}

bottomPanel__icon.addEventListener('click', playListActive);
playlist__header__button.addEventListener('click', playListActive);
/*END PlayList section*/