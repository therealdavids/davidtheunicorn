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
    var logo_p1 = new Logo(this.game, x - 50, y - 50);
    var logo_p2 = new Logo(this.game, x, y);
    this.logo_p1 = logo_p1;
    this.logo_p2 = logo_p2;
    this.add.existing(logo_p1);
    this.add.existing(logo_p2);
  }

  update() {


	    if (this.input.keyboard.isDown(Phaser.Keyboard.W)) {
	    	console.log('UP');
	    	this.logo_p2.y -= 10;
	    }  	

	    if (this.input.keyboard.isDown(Phaser.Keyboard.S)) {
	    	console.log('DOWN');
	    	this.logo_p2.y += 10;
	    }  		    

	    if (this.input.keyboard.isDown(Phaser.Keyboard.A)) {
	    	console.log('LEFT');
	    	this.logo_p2.x -= 10;
	    }


	    if (this.input.keyboard.isDown(Phaser.Keyboard.D)) {
			console.log('xxxxRIGHT');
			this.logo_p2.x += 10;
	    }




	    if (this.input.keyboard.isDown(Phaser.Keyboard.UP)) {
	    	console.log('UP');
	    	this.logo_p1.y -= 10;
	    }  	

	    if (this.input.keyboard.isDown(Phaser.Keyboard.DOWN)) {
	    	console.log('DOWN');
	    	this.logo_p1.y += 10;
	    }  		    

	    if (this.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {
	    	console.log('LEFT');
	    	this.logo_p1.x -= 10;
	    }


	    if (this.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {
			console.log('xxxxRIGHT');
			this.logo_p1.x += 10;
	    }

  }


}
