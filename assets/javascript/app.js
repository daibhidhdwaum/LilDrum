const lilDrum = {};

// create array of paths to sound sources
lilDrum.instruments = [
    {
        hit: '0',
        keyCode: '65',
        soundPath: `./assets/audio/kick.wav`
    },
    {
        hit: '1',
        keyCode: '83',
        soundPath: `./assets/audio/snare.wav`
    },
    {
        hit: '2',
        keyCode: '68',
        soundPath: `./assets/audio/closedHat.wav`
    },
    {
        hit: '3',
        keyCode: '70',
        soundPath: `./assets/audio/openHat.wav`
    }
]
// initialise audio connction
lilDrum.sound = new Audio();
let hit;
// create function to play sound
lilDrum.playSound = (hit) =>{
    // assign source of sound to be played
    lilDrum.sound.src = lilDrum.instruments[hit].soundPath;
    // play source
    lilDrum.sound.currentTime = 0;
    lilDrum.sound.play();
}

lilDrum.setTimeout = () => {
    setTimeout(()=>{
        $(`#${hit}`).removeClass('played');
    }, 600)
}

// grab sound requested
lilDrum.onClickSound = () => {
    // callback to trigger when sound is played
    $('.sound').on('click', function(){
        hit = $(this).attr('id');
        lilDrum.playSound(hit);
        $(`#${hit}`).addClass('played');
        lilDrum.setTimeout();
})
}

// keyboard trigger function
lilDrum.keyTriggerSound = () => {
    // look at window to 
    $(window).keydown((e) => {
        // determine which key has been hit
        const keyHit = $(`li[dataKey=${e.keyCode}]`);
        hit = keyHit[0].attributes[1].value;
        lilDrum.playSound(hit);
        $(`#${hit}`).addClass('played');
        lilDrum.setTimeout();

    })
}

    lilDrum.init = () => {
        lilDrum.onClickSound();
        lilDrum.keyTriggerSound();
    }

$(() => {
    lilDrum.init();
})