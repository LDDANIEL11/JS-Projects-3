'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnClosed = document.querySelector('.close-modal');
const btnOpened = document.querySelectorAll('.show-modal');

const openmodal = function () {
  modal.classList.remove('hidden');
};

const closemodal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

//opening modals with click
for (let i = 0; i < btnOpened.length; i++) {
  btnOpened[i].addEventListener('click', openmodal);
}

//closing modals with click
btnClosed.addEventListener('click', closemodal);

//closing modal with escape
document.addEventListener('keydown', function (event) {
  event.key === 'Escape' ? closemodal() : none;
});
