const val = document.querySelector('.val');
const decrease = document.querySelector('.decrease');
const increase = document.querySelector('.increase');

decrease.addEventListener('click', changeValue);
increase.addEventListener('click', changeValue);

function changeValue(e) {
  let newVal = 0;
  if(val.classList.contains('fadeOutUp')) {
    val.classList.remove('fadeOutUp');
    val.classList.remove('fadeInUp');
  } else if(val.classList.contains('fadeOutDown')) {
    val.classList.remove('fadeOutDown');
    val.classList.remove('fadeInDown');
  }
  if(e.target === decrease || 
    e.target.parentElement === decrease) {
    newVal = parseInt(val.textContent) - 1;
    val.classList.add('fadeOutDown');
    setTimeout(() => {
      val.classList.add('fadeInDown');
      val.textContent = newVal; 
    }, 200);
  } else if(e.target === increase || 
    e.target.parentElement === increase) {
    newVal = parseInt(val.textContent) + 1;
    val.classList.add('fadeOutUp');
    setTimeout(() => {
      val.classList.add('fadeInUp');
      val.textContent = newVal;
    }, 200);
  }
}
