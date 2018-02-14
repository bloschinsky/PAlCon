export function parsing(inputEl, outputEl) {
  const lettersStr = inputEl.value;
  const lettersArray = lettersStr.toUpperCase().split('');
  this.wordsArray = [];

  for (const letter of lettersArray) {
    if (this.ICAO.hasOwnProperty(letter)) {
      this.wordsArray.push(this.ICAO[letter]);
    }
  }

  outputEl.innerHTML = this.wordsArray.join(' - ');
}
