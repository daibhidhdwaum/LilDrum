const lilDrum = {};

// create array of paths to sound sources
lilDrum.instruments = [
  {
    pad: "0",
    keyCode: "a",
    soundPath: [
      `./assets/audio/kicks/kick.wav`,
      `./assets/audio/kicks/kick2.wav`,
      `./assets/audio/kicks/kick3.wav`,
      `./assets/audio/kicks/kick4.wav`,
    ],
  },
  {
    pad: "1",
    keyCode: "s",
    soundPath: [
      `./assets/audio/snares/snare.wav`,
      `./assets/audio/snares/snare2.wav`,
      `./assets/audio/snares/snare3.wav`,
      `./assets/audio/snares/snare4.wav`,
    ],
  },
  {
    pad: "2",
    keyCode: "d",
    soundPath: [
      `./assets/audio/closedHats/closedHat.wav`,
      `./assets/audio/closedHats/closedHat2.wav`,
      `./assets/audio/closedHats/closedHat3.wav`,
      `./assets/audio/closedHats/closedHat4.wav`,
    ],
  },
  {
    pad: "3",
    keyCode: "f",
    soundPath: [
      `./assets/audio/openHats/openHat.wav`,
      `./assets/audio/openHats/openHat2.wav`,
      `./assets/audio/openHats/openHat3.wav`,
      `./assets/audio/openHats/openHat4.wav`,
    ],
  },
  {
    pad: "4",
    keyCode: "g",
    soundPath: [
      `./assets/audio/lowTom/lowTom.wav`,
      `./assets/audio/lowTom/lowTom2.wav`,
      `./assets/audio/lowTom/lowTom3.wav`,
      `./assets/audio/lowTom/lowTom4.wav`,
    ],
  },
  {
    pad: "5",
    keyCode: "h",
    soundPath: [
      `./assets/audio/midTom/midTom.wav`,
      `./assets/audio/midTom/midTom2.wav`,
      `./assets/audio/midTom/midTom3.wav`,
      `./assets/audio/midTom/midTom4.wav`,
    ],
  },
  {
    pad: "6",
    keyCode: "j",
    soundPath: [
      `./assets/audio/highTom/highTom.wav`,
      `./assets/audio/highTom/highTom2.wav`,
      `./assets/audio/highTom/highTom3.wav`,
      `./assets/audio/highTom/highTom4.wav`,
    ],
  },
  {
    pad: "7",
    keyCode: "k",
    soundPath: [
      `./assets/audio/cymbal/cymbal.wav`,
      `./assets/audio/cymbal/cymbal2.wav`,
      `./assets/audio/cymbal/cymbal3.wav`,
      `./assets/audio/cymbal/cymbal4.wav`,
    ],
  },
];

// sets default drum sound
lilDrum.instrumentSound = 0;

// function to point to selected kit sound
lilDrum.selectDrumSound = () => {
  $("select").on("change", function () {
    const instSoundStr = $(this).find(":selected").attr("id");
    const strArr = [];
    strArr.push(instSoundStr);
    const indexNum = strArr[0].split("")[1];
    lilDrum.instrumentSound = parseInt(indexNum);
  });
};

// create function to play sound
lilDrum.playSound = (hit, selectedSound) => {
  // initialise audio connction
  const sound = new Audio();
  // assign source of sound to be played
  sound.src = lilDrum.instruments[hit].soundPath[selectedSound];
  // play source
  sound.currentTime = 0;
  sound.play();
};

lilDrum.onHitResize = (hit) => {
  $(`#${hit}`).addClass("played");

  setTimeout(() => {
    $(`#${hit}`).removeClass("played");
  }, 410);
};

// grab sound requested
lilDrum.onClickSound = () => {
  // callback to trigger when sound is played
  $(".sound").on("click", function () {
    const hit = $(this).attr("id");

    lilDrum.playSound(hit, lilDrum.instrumentSound);
    lilDrum.onHitResize(hit);
  });
};

// keyboard trigger function
lilDrum.keyTriggerSound = () => {
  // look at window
  $(window).keydown((e) => {
    // to determine which key has been hit
    const key = e.key.toLowerCase();
    for (let i = 0; i < lilDrum.instruments.length; i++) {
      if (key === lilDrum.instruments[i].keyCode) {
        const hit = lilDrum.instruments[i].pad;
        lilDrum.playSound(hit, lilDrum.instrumentSound);
        lilDrum.onHitResize(hit);
      }
    }
  });
};

lilDrum.init = () => {
  lilDrum.onClickSound();
  lilDrum.keyTriggerSound();
  lilDrum.selectDrumSound();
};

$(() => {
  lilDrum.init();
});
