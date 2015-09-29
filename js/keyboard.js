// monitor key presses on the entire page
$(document).keypress(
    function(e){
        // number of pixels to move mario (size of the brick)
        x_step = bricks[0].width;
        y_step = bricks[0].height;

        // log spam
        // console.log ('Recieved key press.');
        // console.log (e.key);
        // console.log (e.keyCode);

        // interpret the key code
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
                // this is toggled on a printable character
                if (!game_over_flag && !stage_clear_flag){
                    // interpret the key string
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
                }
            default:
                break;
        }
    }
);

// move mario by a certain amount if allowed
function move_mario_keyboard (x_amount, y_amount){
    // ensures that we have not won, lost, or used the mouse
    if (game_over_flag || stage_clear_flag || mouse_flag){
        return;
    }

    move_mario (x_amount, y_amount);
}

// generic mario moving, changes sprite and adjusts position
function move_mario (x_amount, y_amount){
    var new_x = mario.position.x + x_amount;
    var new_y = mario.position.y + y_amount;
    var hit_x, hit_y, width, height, hit_box;

    // set the correct sprite
    if (x_amount < 0){
        if (star_flag){
            mario.texture = texture_star_left;
        }
        else{
            mario.texture = texture_left;
        }
    }
    else if (x_amount > 0 && !game_over_flag){
        if (star_flag){
            mario.texture = texture_star_right;
        }
        else{
            mario.texture = texture_right;
        }
    }

    // if we are not invincible, check brick collision
    if (!star_flag && !game_over_flag && !stage_clear_flag){
        // creates a hitbox between our old and new position

        hit_x = Math.min (new_x, mario.position.x);
        width = Math.max (new_x, mario.position.x) - hit_x;
        if (width <= 0){
            width = 1;
        }

        hit_y = Math.min (new_y, mario.position.y);
        height = Math.max (new_y, mario.position.y) - hit_y;
        if (height <= 0){
            height = 1;
        }

        hit_box = new PIXI.Rectangle(hit_x, hit_y, width, height);

        collision_detection_bricks(hit_box);

        console.log(hit_box);
    }

    if (new_x > 0 && new_x < renderer.width){
        mario.position.x += x_amount;
    }
    if (new_y > 0 && new_y < renderer.height){
        mario.position.y += y_amount;
    }
}
