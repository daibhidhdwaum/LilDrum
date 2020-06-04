const lilDrum = {};

// create array of paths to sound sources
lilDrum.instruments = [
    {
        soundPath: `./assets/sounds/kick.wav`
    },
    {
        soundPath: `./assets/sounds/snare.wav`
    },
    {
        soundPath: `./assets/sounds/closedHat.wav`
    },
    {
        soundPath: `./assets/sounds/openHat.wav`
    }
]
// initialise audio connction
// created functionto play sound
    // assign source of sound to be played
    // play sourc

// grab sound requested
lilDrum.onClickSound = () => {

    $('.sound').on('click', function(){
        const hit = $(this).attr('id');
    })
}
    // callback to trigger when sound is played

    lilDrum.init = () => {
        lilDrum.onClickSound();
    }

$(() => {
    lilDrum.init();
})