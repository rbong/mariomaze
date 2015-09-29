var sound_theme = new Howl({
    urls: ['sound/theme.mp3'],
    loop: true,
    autoplay: true
});
var quick_theme = new Howl({
    urls: ['sound/quick_theme.mp3'],
    loop: true,
});
var sound_star = new Howl({
    urls: ['sound/star_power.mp3'],
    loop: true
});
var sound_stage_clear = new Howl({
    urls: ['sound/stage_clear.mp3'],
    loop: false
});
var sound_game_over = new Howl({
    urls: ['sound/game_over.mp3'],
    loop: false
});

function stop_all_sound(){
    console.log ("Stopping sounds.");

    if (star_flag){
        sound_star.stop();
    }
    if (stage_clear_flag){
        sound_stage_clear.stop();
    }
    if (game_over_flag){
        sound_game_over.stop();
    }
    quick_theme.mute();
    sound_theme.mute();
}

