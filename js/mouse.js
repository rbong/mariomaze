$(document).mousemove(
    function(e){
        var x_pos = e.pageX - mario.width;
        var y_pos = e.pageY - mario.height;

        if (Math.abs (mario.position.x - x_pos) < 5 &&
                Math.abs (mario.position.y - y_pos) < 5){
            mouse_flag = true;
        }
        if (mouse_flag && !(game_over_flag || stage_clear_flag)){
            if (!star_flag){
                var hit_box = get_mouse_hit_box(x_pos, y_pos);
                collision_detection_bricks(hit_box);
            }

            move_mario (x_pos - mario.position.x, y_pos - mario.position.y);
        }
    }
);

function get_mouse_hit_box(x_pos, y_pos){
    var x, y, width, height;

    x = Math.min (x_pos, mario.position.x);
    width = Math.max (x_pos, mario.position.x) - x;

    y = Math.min (y_pos, mario.position.y);
    height = Math.max (y_pos, mario.position.y) - y;

    return new PIXI.Rectangle(x, y, width, height);
}
