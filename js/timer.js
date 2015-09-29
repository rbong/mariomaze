var time_left = 98;
var timer_text = new PIXI.Text("99", style);

timer_text.x = 745;

stage.addChild(timer_text);

function tick_timer(){
    if (!(game_over_flag || stage_clear_flag)){
        timer_text.text = time_left.toString();

        time_left -= 1;
        if (time_left < 0){
            game_over();
        }
        else if (time_left == 29 && !star_flag){
            stop_all_sound();
            quick_theme.play();
        }

        console.log (time_left);
    }
}

setInterval(tick_timer, 1000);
