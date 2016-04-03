export default class Menu extends Phaser.State {

  create () {

  }

  update() {


    if (this.input.keyboard.isDown(Phaser.Keyboard.ENTER)) {
 		this.state.start('Game');
    }  	

  }


}
