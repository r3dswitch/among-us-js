import {player_constants} from "./constants.js";
import {movePlayer} from "./movement.js";

let player = {};
let map = {};
let cursors = {};

export function preload ()
{
    this.load.image('map', './assets/maps/map-full.png');
    this.load.spritesheet(
        'player',
        './assets/sprites/walk/walk-combined.png',
        {
            frameHeight: player_constants.PLAYER_SPRITE_HEIGHT,
            frameWidth: player_constants.PLAYER_SPRITE_WIDTH,
        }
    );
}

export function create ()
{
    map = this.add.image(100, 950, 'map');
    player = this.add.sprite(350, 450, 'player');
    player.displayHeight = player_constants.PLAYER_HEIGHT;
    player.displayWidth = player_constants.PLAYER_WIDTH;

    cursors = this.input.keyboard.createCursorKeys();
}

export function update ()
{
    this.scene.scene.cameras.main.centerOn(player.x, player.y);
    movePlayer(player, cursors);
}
