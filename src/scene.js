import {player_constants} from "./constants.js";

export let player = {};
export let map = {};

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

}

export function update ()
{

}
