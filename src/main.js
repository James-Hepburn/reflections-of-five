import Phaser from 'phaser';
import MainMenuScene from './MainMenuScene.js';

const config = {
  type: Phaser.AUTO,
  backgroundColor: '#000000', 
  pixelArt: true, 
  scale: {
    mode: Phaser.Scale.FIT,           
    autoCenter: Phaser.Scale.CENTER_BOTH,
    width: 1280,                      
    height: 720
  },
  scene: [MainMenuScene]
};

const game = new Phaser.Game(config);

window.addEventListener('resize', () => {
  game.scale.resize(window.innerWidth, window.innerHeight);
});