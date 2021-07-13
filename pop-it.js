var circles = document.getElementsByClassName('circle');

function setupSynth() {
  window.synth = new Tone.Synth({
    oscillator: {
      type: 'sine',
      modulationFrequency: 0.5
    },
    envelope: {
      attack: 0,
      decay: 0.2,
      sustain: 0,
      release: 0.5,
    }
  }).toMaster();
}

function boopMe() {
  if (!window.synth) {
    setupSynth();
  }
  
  window.synth.triggerAttackRelease(600, '9n');
}

for(let circle of circles){
  circle.addEventListener('touchstart', function(e) {
    e.stopPropagation();
    e.preventDefault();
    boopMe();
  });
  
  circle.addEventListener('mousedown', boopMe);
}