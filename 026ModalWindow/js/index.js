const card1 = document.querySelector('.card-1');
const card2 = document.querySelector('.card-2');
const card3 = document.querySelector('.card-3');
const card1Btn = document.querySelector('.card-1 button');
const card2Btn = document.querySelector('.card-2 button');
const card3Btn = document.querySelector('.card-3 button');

document.addEventListener('DOMContentLoaded', card1Appear);
card1Btn.addEventListener('click', switchCard);
card2Btn.addEventListener('click', switchCard);
card3Btn.addEventListener('click', switchCard);

function card1Appear() {
  setTimeout(() => card1.classList.toggle('appear'), 400);
}

function switchCard(e) {
  let currCard = card1, newCard = card2;
  if(e.target === card2Btn) {
    currCard = card2;
    newCard = card3;
  } else if(e.target === card3Btn){
    currCard = card3;
    newCard = card1;
  } 
  currCard.classList.toggle('disappear');
  setTimeout(() => {
    newCard.classList.toggle('appear');
    currCard.classList.toggle('disappear');
    currCard.classList.toggle('appear');
  }, 600);
}



