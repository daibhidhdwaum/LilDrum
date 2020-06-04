const lilDrum = {};

// create array of paths to sound sources
lilDrum.instruments = [
    {
        soundPath: `./assets/audio/kick.wav`
    },
    {
        soundPath: `./assets/audio/snare.wav`
    },
    {
        soundPath: `./assets/audio/closedHat.wav`
    },
    {
        soundPath: `./assets/audio/openHat.wav`
    }
]
// initialise audio connction
lilDrum.sound = new Audio();
sound = lilDrum.sound;
// created functionto play sound
lilDrum.playSound = (hit) =>{
    // assign source of sound to be played
    sound.src = lilDrum.instruments[hit].soundPath;
    // play source
    sound.currentTime = 0;
    sound.play();

}

// grab sound requested
lilDrum.onClickSound = () => {

    $('.sound').on('click', function(){
        const hit = $(this).attr('id');
        lilDrum.playSound(hit);
    })
}
    // callback to trigger when sound is played

    lilDrum.init = () => {
        lilDrum.onClickSound();
    }

$(() => {
    lilDrum.init();
})