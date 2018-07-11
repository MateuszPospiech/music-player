/***Viev more section***/

//button
const header__icon = document.getElementById('header__icon');
const viewMore__button = document.querySelector('.view-more__button');
//section
const viewMore = document.getElementById('view-more');



const viewMoreActive = () => {
    viewMore.classList.toggle('view-more--active');
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

/*Play Button*/
const playButton = document.querySelector('.button-panel__trigger');
const playImg = document.querySelector('.play-inactive img');


const turnOnOffMusic = () => {
    if(playImg.src == 'http://localhost:3000/img/Play_inactive2.png'){
        playImg.src = "http://localhost:3000/img/Play_active3.png";
        }
    else if(playImg.src == 'http://localhost:3000/img/Play_active3.png') {
        playImg.src = "http://localhost:3000/img/Play_inactive2.png";
    }
}

playButton.addEventListener('click', turnOnOffMusic);

/*END Play Button*/


/*Rotate song banner*/
const rotatePlay = () => {
    const slickActive = document.querySelectorAll('.slider__item img');
    
    for(i=0; i < slickActive.length; i++){
        slickActive[i].classList.toggle('rollPlayMusic');
        slickActive[i].classList.toggle('rollEndMusic');
    }
}

playButton.addEventListener('click', rotatePlay);
/*END Rotate song banner*/

/*Repeat button active*/
const repeatIco = document.querySelector('.button-panel__repeat-ico');
const repeatButton = document.querySelector('.button-panel__repeat');

const activeRepeat = () => {
    repeatIco.classList.toggle('button-panel__repeat-ico--active')
}

repeatButton.addEventListener('click', activeRepeat);
/*END Repeat button active*/


/*Shuffle button active*/
const shuffleIco = document.querySelector('.button-panel__shuffle-ico');
const shuffleButton = document.querySelector('.button-panel__shuffle');

const activeShuffle = () => {
    shuffleIco.classList.toggle('button-panel__shuffle-ico--active')
}

shuffleButton.addEventListener('click', activeShuffle);
/*END Shuffle button active*/