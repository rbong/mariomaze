// monitor mouse movement on the entire page
$(document).mousemove(
    function(e){
        // adjust the positions to be centered on mario
        var x_pos = e.pageX - mario.width;
        var y_pos = e.pageY - mario.height;

        // if the mouse is within 5 pixels, enable mouse input
        if (Math.abs (mario.position.x - x_pos) < 5 &&
                Math.abs (mario.position.y - y_pos) < 5 && !mouse_flag){
            mouse_flag = true;
            mario.scale.x -= 0.5;
            mario.scale.y -= 0.5;
        }
        if (mouse_flag && !(game_over_flag || stage_clear_flag)){
            move_mario (x_pos - mario.position.x, y_pos - mario.position.y);
        }
    }
);

// makes a rectangle between mario's position and the mouse position
function get_mouse_hit_box(x_pos, y_pos){
    var x, y, width, height;

    x = Math.min (x_pos, mario.position.x);
    width = Math.max (x_pos, mario.position.x) - x;

    y = Math.min (y_pos, mario.position.y);
    height = Math.max (y_pos, mario.position.y) - y;

    return new PIXI.Rectangle(x, y, width, height);
}
