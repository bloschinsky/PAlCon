const voices = window.speechSynthesis.getVoices();
const voice = voices[10];
const voiceURI = 'native';
const volume = 1; // 0 to 1
const rate = 1; // 0.1 to 10
const pitch = 1;
const lang = 'ru-Ru'; // 'en-US' to read in English;

export function speak() {
  const msg = Object.assign(new SpeechSynthesisUtterance(), {
    voice,
    voiceURI,
    volume,
    rate,
    pitch,
    lang,
    text: this.wordsArray.join(' '),
    onend(e) {
      console.log(`Finished in ${e.elapsedTime} seconds.`);
    }
  });

  if (window.speechSynthesis.speaking === false) {
    window.speechSynthesis.speak(msg);
  }
}
