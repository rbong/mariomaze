// main theme
var sound_theme = new Howl({
    urls: ['sound/theme.mp3'],
    loop: true,
    autoplay: true
});
// time running out theme
var quick_theme = new Howl({
    urls: ['sound/quick_theme.mp3'],
    loop: true,
});
// star theme
var sound_star = new Howl({
    urls: ['sound/star_power.mp3'],
    loop: true
});
// stage clear theme
var sound_stage_clear = new Howl({
    urls: ['sound/stage_clear.mp3'],
    loop: false
});
// game over theme
var sound_game_over = new Howl({
    urls: ['sound/game_over.mp3'],
    loop: false
});

// halts all sounds
function stop_all_sound(){
    console.log ("Stopping sounds.");

    // test flags for efficiency and to avoid glitches
    if (star_flag){
        sound_star.stop();
    }
    if (stage_clear_flag){
        sound_stage_clear.stop();
    }
    if (game_over_flag){
        sound_game_over.stop();
    }
    // glitchy long songs must be muted
    quick_theme.mute();
    sound_theme.mute();
}
