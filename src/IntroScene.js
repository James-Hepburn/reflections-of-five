import Phaser from 'phaser';

export default class IntroScene extends Phaser.Scene {
  constructor() {
    super('IntroScene');
  }

  preload() {
    this.load.image('elevator_interior', '/elevator_interior.png');
  }

  create() {
    const { width, height } = this.scale;

    this.cameras.main.fadeIn(2000, 0, 0, 0);

    this.add.image(width / 2, height / 2, 'elevator_interior')
      .setScale(0.8) 
      .setAlpha(0.7);

    const text = this.add.text(width / 2, height - 100, '...Where am I?', {
      fontFamily: 'serif',
      fontSize: '28px',
      color: '#ffffff',
      align: 'center',
      wordWrap: { width: 600 }
    }).setOrigin(0.5).setAlpha(0);

    this.tweens.add({
      targets: text,
      alpha: 1,
      duration: 2000,
      delay: 1000
    });

    this.time.delayedCall(4000, () => {
      this.showContinueHint();
    });
  }

  showContinueHint() {
    const { width, height } = this.scale;
    const continueText = this.add.text(width / 2, height - 50, '[ Press Space to Continue ]', {
      fontFamily: 'serif',
      fontSize: '20px',
      color: '#999999'
    }).setOrigin(0.5).setAlpha(0);

    this.tweens.add({
      targets: continueText,
      alpha: { from: 0, to: 1 },
      duration: 1000,
      yoyo: true,
      repeat: -1
    });

    this.input.keyboard.once('keydown-SPACE', () => {
      this.cameras.main.fadeOut(1500, 0, 0, 0);
      this.time.delayedCall(1500, () => {
        this.scene.start('Floor1Scene');
      });
    });
  }
}