import {movement_constants, map_constants, player_constants} from "./constants.js";
import {mapBounds} from "./validateMovement.js";

function isValidMovement(x, y)
{
    x += Math.floor(map_constants.SHIP_WIDTH / 2) + Math.floor(player_constants.PLAYER_WIDTH / 2);
    y += Math.floor(map_constants.SHIP_HEIGHT / 2) + player_constants.PLAYER_HEIGHT - 10;
    if (mapBounds[y])
    {
        return mapBounds[y].includes(x);
    }
    return false;
}

export function movePlayer(player, cursors)
{
    if (cursors.left.isDown && isValidMovement(player.x - movement_constants.PLAYER_SPEED, player.y))
    {
        player.play('running', true);
        player.x = player.x - movement_constants.PLAYER_SPEED;
        player.flipX = true;
    }
    else if (cursors.right.isDown && isValidMovement(player.x + movement_constants.PLAYER_SPEED, player.y))
    {
        player.play('running', true);
        player.x = player.x + movement_constants.PLAYER_SPEED;
        player.flipX = false;
    }
    else if (cursors.up.isDown && isValidMovement(player.x, player.y - movement_constants.PLAYER_SPEED))
    {
        player.play('running', true);
        player.y = player.y - movement_constants.PLAYER_SPEED;
    }
    else if (cursors.down.isDown && isValidMovement(player.x, player.y + movement_constants.PLAYER_SPEED))
    {
        player.play('running', true);
        player.y = player.y + movement_constants.PLAYER_SPEED;
    }
    else
    {
        player.anims.stop();
        player.setFrame(11);
    }
}