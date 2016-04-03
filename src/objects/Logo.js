/*
 * Logo
 * ====
 *
 * A sample prefab (extended game object class), for displaying the Phaser
 * logo.
 */


export default class Logo extends Phaser.Sprite {

  constructor (game, x, y, controls) {
    super(game, x, y, 'phaser');
    this.width = 130;
    this.height = 130;
    this.anchor.set(0.5);
    this.controls = controls;
  }

  update () {
  	this.angle += .7;
  	var input = this.game.input;

	if (input.keyboard.isDown(this.controls.UP)) {
		this.y = Math.max(0, this.y - 10);
	}  	

	if (input.keyboard.isDown(this.controls.DOWN)) {
		this.y = Math.min( this.y + 10, 600);
	}  		    

	if (input.keyboard.isDown(this.controls.LEFT)) {
		this.x = Math.max(0, this.x - 10);
	}


	if (input.keyboard.isDown(this.controls.RIGHT)) {
		this.x = Math.min( this.x + 10, 800);
	}


  }

}
