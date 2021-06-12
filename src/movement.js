import {movement_constants} from "./constants.js";

export function movePlayer(player, cursors)
{
    if (cursors.left.isDown)
    {
        player.x = player.x - movement_constants.PLAYER_SPEED;
        player.flipX = true;
    }
    else if (cursors.right.isDown)
    {
        player.x = player.x + movement_constants.PLAYER_SPEED;
        player.flipX = false;
    }
    else if (cursors.up.isDown)
    {
        player.y = player.y - movement_constants.PLAYER_SPEED;
    }
    else if (cursors.down.isDown)
    {
        player.y = player.y + movement_constants.PLAYER_SPEED;
    }
}