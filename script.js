var speech = new SpeechSynthesisUtterance();
const genbtn = document.querySelector(".genbtn");
const textarea = document.querySelector(".text");
genbtn.addEventListener("click", () => {
    speech.text = textarea.value;
    window.speechSynthesis.speak(speech);
    speech.volume =1;
    speech.rate =1;
    speech.pitch =1;
});

let voicearr = [];
let voicebtn = document.querySelector(".voicebtn");
window.speechSynthesis.onvoiceschanged = () => {
    voicearr = window.speechSynthesis.getVoices();
    speech.voice = voicearr[0];

    voicearr.forEach((voice, i) => (voicebtn.options[i] = new Option(voice.name,i)
    ));
}
voicebtn.addEventListener("change",()=>{
    speech.voice = voicearr[voicebtn.value];
})