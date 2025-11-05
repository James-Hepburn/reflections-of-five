import Phaser from 'phaser';

export default class MainMenuScene extends Phaser.Scene {
  constructor() {
    super('MainMenu');
  }

  preload() {
    this.load.image('background', '/menu_bg.png');
  }

  create() {
    const { width, height } = this.scale;

    const bg = this.add.image(width / 2, height / 2, 'background')
      .setScale(1) 
      .setAlpha(0.7);

    this.tweens.add({
      targets: bg,
      alpha: { from: 0, to: 0.7 },
      duration: 2000,
      ease: 'Sine.easeInOut'
    });

    const title = this.add.text(width / 2, height / 3, 'Reflections of Five', {
      fontFamily: 'serif',
      fontSize: '48px',
      color: '#ffffff'
    }).setOrigin(0.5);

    this.tweens.add({
      targets: title,
      alpha: { from: 0, to: 1 },
      duration: 2000,
      ease: 'Sine.easeInOut'
    });

    const newGameText = this.add.text(width / 2, height / 2, 'New Game', {
      fontFamily: 'serif',
      fontSize: '28px',
      color: '#cccccc'
    }).setOrigin(0.5).setInteractive();

    newGameText.on('pointerover', () => newGameText.setColor('#ffffff'));
    newGameText.on('pointerout', () => newGameText.setColor('#cccccc'));
    newGameText.on('pointerdown', () => {
      this.cameras.main.fadeOut(1000, 0, 0, 0); // smooth fade to black
      this.time.delayedCall(1000, () => {
        this.scene.start('IntroScene');
      });
    });

    const continueText = this.add.text(width / 2, height / 2 + 60, 'Continue', {
      fontFamily: 'serif',
      fontSize: '28px',
      color: '#666666'
    }).setOrigin(0.5).setInteractive();

    continueText.on('pointerover', () => continueText.setColor('#888888'));
    continueText.on('pointerout', () => continueText.setColor('#666666'));
    continueText.on('pointerdown', () => {
      console.log('Continue game'); 
    });
  }
}