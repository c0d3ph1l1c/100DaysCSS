const input = document.querySelector('input');
const suggestions = document.querySelector('.suggestions');

input.addEventListener('input', makeSuggestions);

function makeSuggestions() {
  if(this.value === '') {
    suggestions.classList.remove('appear');
  } else {
    suggestions.innerHTML = '';
    for(let i = 0; i < 3; i++) {
      const li = document.createElement('li');
      if(i === 0) {
        li.textContent = this.value;
      } else if (i === 1){
        li.textContent = `Veritas et ${this.value}`;
      } else {
        li.textContent = `ut aliquid ex ${this.value} vero eos`;
      }
      suggestions.appendChild(li);
    }
    suggestions.classList.add('appear');
  }
}