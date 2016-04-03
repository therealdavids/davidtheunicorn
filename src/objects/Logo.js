/*
 * Logo
 * ====
 *
 * A sample prefab (extended game object class), for displaying the Phaser
 * logo.
 */


export default class Logo extends Phaser.Sprite {

  constructor (game, x, y) {
    super(game, x, y, 'phaser');
    this.width = 30;
    this.height = 30;
    this.anchor.set(0.5);
  }

  update () {
    this.angle += 0.1;    
  }

}
