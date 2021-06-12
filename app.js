import {constants} from './src/constants.js';

var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 200 }
        }
    },
    scene: {
        preload: preload,
        create: create
    }
};

var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('map', './assets/maps/map-cafeteria.png');
    this.load.spritesheet(
        'player',
        './assets/sprites/walk/walk-combined.png',
        {
            frameHeight: constants['PLAYER_SPRITE_HEIGHT'],
            frameWidth: constants['PLAYER_SPRITE_WIDTH']
        }
    );
}

function create ()
{
    this.add.image(400, 300, 'map');
    const player = this.add.sprite(350, 450, 'player');
    player.displayHeight = constants['PLAYER_HEIGHT'];
    player.displayWidth = constants['PLAYER_WIDTH'];

}
