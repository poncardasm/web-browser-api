const synth = window.speechSynthesis;

function onSubmit(e) {
  e.preventDefault();

  const textInput = document.getElementById('text-input');
  const utterance = new SpeechSynthesisUtterance(textInput.value);

  synth.speak(utterance);
}

document.getElementById('form').addEventListener('submit', onSubmit);
