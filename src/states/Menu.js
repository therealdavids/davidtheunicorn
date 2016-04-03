import assets from '../assets';

let menuState = {
  curPos: 0
}

export default class Menu extends Phaser.State {

  preload() {
    this.load.pack('menu', null, assets);
  }

  create () {
    let dudes = ['dude', 'dude2', 'dude', 'dude2', 'dude'];
    menuState.curPos = 0;

    dudes.map((dudeStr, i) => {
      let coord = [0,0];
      let dude = this.game.add.image(coord[0] + (i * 105), coord[1], dudeStr);
    });


    this.selector = this.game.add.image(0, 0, 'dude-selector');

    let key1 = this.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
    key1.onDown.add(() => {this.handleKeyRight();}, null);

    let key2 = this.input.keyboard.addKey(Phaser.Keyboard.LEFT);
    key2.onDown.add(() => {this.handleKeyLeft();}, null);

  }

  update() {
    if (this.input.keyboard.isDown(Phaser.Keyboard.ENTER)) {
 		   this.state.start('Game');
    }
  }

  handleKeyRight() {
    menuState.curPos++;
    menuState.curPos%=5;
    this.selector.x = menuState.curPos * 105;
  }

  handleKeyLeft() {
    menuState.curPos+=4;
    menuState.curPos%=5;
    this.selector.x = menuState.curPos * 105;
  }
}
