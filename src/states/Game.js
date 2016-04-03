/*
 * Game state
 * ==========
 *
 * A sample Game state, displaying the Phaser logo.
 */

import Logo from '../objects/Logo';

export default class Game extends Phaser.State {

  create () {
    // TODO: Replace this with really cool game code here :)

    const { centerX: x, centerY: y } = this.world;
    var logo_p1 = new Logo(this.game, x - 50, y - 50, {
    	UP: Phaser.Keyboard.W,
    	DOWN: Phaser.Keyboard.S,
    	LEFT: Phaser.Keyboard.A,
    	RIGHT: Phaser.Keyboard.D
    });
    var logo_p2 = new Logo(this.game, x, y, {
    	UP: Phaser.Keyboard.UP,
    	DOWN: Phaser.Keyboard.DOWN,
    	LEFT: Phaser.Keyboard.LEFT,
    	RIGHT: Phaser.Keyboard.RIGHT
    });
    this.logo_p1 = logo_p1;
    this.logo_p2 = logo_p2;
    this.add.existing(logo_p1);
    this.add.existing(logo_p2);
  }

  update() {

  }


}
