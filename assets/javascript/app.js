const lilDrum = {};

// create array of paths to sound sources
lilDrum.instruments = [
    {   
        pad: "0",
        keyCode: "a",
        soundPath: [
                    `./assets/audio/kicks/kick.wav`,
                    `./assets/audio/kicks/kick1.wav`,
                    `./assets/audio/kicks/kick2.wav`,
                    `./assets/audio/kicks/kick3.wav`
        ]
    },
    {
        pad: "1",
        keyCode: "s",
        soundPath:  [ 
                    `./assets/audio/snares/snare.wav`,
                    `./assets/audio/snares/snare2.wav`,
                    `./assets/audio/snares/snare3.wav`,
                    `./assets/audio/snares/snare4.wav`
        ]
    },
    {
        pad: "2",
        keyCode: "d",
        soundPath: [ 
            `./assets/audio/closedHats/closedHat.wav`,
            `./assets/audio/closedHats/closedHat2.wav`,
            `./assets/audio/closedHats/closedHat3.wav`,
            `./assets/audio/closedHats/closedHat4.wav`
        ]
    },
    {
        pad: "3",
        keyCode: "f",
        soundPath: [
            `./assets/audio/openHats/openHat.wav`,
            `./assets/audio/openHats/openHat2.wav`,
            `./assets/audio/openHats/openHat3.wav`,
            `./assets/audio/openHats/openHat4.wav`,
        ]
    }
]

let hit;
let instrumentSound;
let selectedInputIndex;

// function to point to selected drum sound 
lilDrum.selectDrumSound = () => {

    $("select").on("change", function () {

        const selectInput = $(this).attr("id");

        // determine what select was changed and assign index value
        switch(selectInput){
            case "kick":
                selectedInputIndex = 0;
                break;
            case "snare":
                selectedInputIndex = 1;
                break;
            case "closedHat":
                selectedInputIndex = 2;
                break;
            case "openHat":
                selectedInputIndex = 3;
                break;
            }

            const instSoundStr = $(this).find(':selected').attr('id');
            const strArr = [];
            strArr.push(instSoundStr)
            const indexNum = strArr[0].split('')[1];
            instrumentSound = parseInt(indexNum);
    })
}
                               
// create function to play sound
lilDrum.playSound = (hit, selectedSound) =>{
    // initialise audio connction
    const sound = new Audio();
    // assign source of sound to be played
    sound.src = lilDrum.instruments[hit].soundPath[selectedSound];
    // play source
    sound.currentTime = 0;
    sound.play();
}

lilDrum.onHitResize = () => {
    $(`#${hit}`).addClass('played');
    setTimeout(()=>{
        $(`#${hit}`).removeClass('played');
    }, 400)
}

// grab sound requested
lilDrum.onClickSound = () => {
    // callback to trigger when sound is played
    $('.sound').on('click', function(){
      
        hit = $(this).attr('id');

        if(instrumentSound === undefined){
            instrumentSound = 0;
        }
        
        lilDrum.playSound(hit, instrumentSound);
        
        lilDrum.onHitResize();
    })
}

// keyboard trigger function
lilDrum.keyTriggerSound = () => {
    // look at window to 
    $(window).keydown((e) => {
        // determine which key has been hit
        const key = e.key.toLowerCase();
        for(let i = 0; i < lilDrum.instruments.length; i++){
            if(key === lilDrum.instruments[i].keyCode){
                hit = lilDrum.instruments[i].pad;
                lilDrum.playSound(hit, instrumentSound);
                lilDrum.onHitResize();
                }
        }
    })
}

lilDrum.init = () => {
    lilDrum.selectDrumSound();
    lilDrum.onClickSound();
    lilDrum.keyTriggerSound();
  
}

$(() => {
    lilDrum.init();
})