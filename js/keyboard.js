$(document).keypress(
    function(e){
        x_step = bricks[0].width;
        y_step = bricks[0].height;

        console.log ('Recieved key press.');
        console.log (e.key);
        console.log (e.keyCode);

        switch (e.keyCode){
            case 37:
                // left
                move_mario_keyboard(-x_step, 0);
                break;
            case 38:
                // up
                move_mario_keyboard(0, -y_step);
                break;
            case 39:
                // right
                move_mario_keyboard(x_step, 0);
                break;
            case 40:
                //down
                move_mario_keyboard(0, y_step);
                break;
            case 0:
                switch (e.key[0]){
                    case 's':
                        if (stage.children.indexOf(star) == -1 &&
                                !star_flag){
                            stage.addChild(star);
                        }
                        break;
                    case 'r':
                        location.reload();
                        break;
                    default:
                        break;
                }
            default:
                break;
        }
    }
);

function move_mario_keyboard (x_amount, y_amount){
    if (game_over_flag || stage_clear_flag || mouse_flag){
        return;
    }

    move_mario (x_amount, y_amount);
}

function move_mario (x_amount, y_amount){
    var new_x = mario.position.x + x_amount;
    var new_y = mario.position.y + y_amount;

    if (x_amount < 0){
        if (star_flag){
            mario.texture = texture_star_left;
        }
        else{
            mario.texture = texture_left;
        }
    }
    else if (x_amount > 0){
        if (star_flag){
            mario.texture = texture_star_right;
        }
        else{
            mario.texture = texture_right;
        }
    }

    if (new_x > 0 && new_x < renderer.width){
        mario.position.x += x_amount;
    }
    if (new_y > 0 && new_y < renderer.height){
        mario.position.y += y_amount;
    }
}
