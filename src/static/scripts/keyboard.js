class Keyboard {
  constructor(){
    this.KEYMAP = {
      49: 0x1,
      50: 0x2,
      51: 0x3,
      52: 0xC,
      81: 0x4,
      87: 0x5,
      69: 0x6,
      82: 0xD,
      65: 0x7,
      83: 0x8,
      68: 0x9,
      70: 0xE,
      90: 0xA,
      88: 0x0,
      67: 0xB,
      86: 0xF
    }
    this.keysPressed = [];

    this.onNextKeyPress = null;

    window.addEventListener('keydown', this.onKeyDown.bind(this), false);
    window.addEventListener('keyup', this.onKeyUp.bind(this), false);
  }
  isKeyPressed(keycode){
    return this.keysPressed[keycode];
  }
  onKeyDown(event){
    let key = this.KEYMAP[event.which];
    this.keysPressed[key] = true;

    if(this.onNextKeyPress !== null && key){
      this.onNextKeyPress(parseInt(key));
      this.onNextKeyPress = null;
    }
  }
  onKeyUp(event){
    let key = this.KEYMAP[event.which];
    this.keysPressed[key] = false;
  }
}

export default Keyboard;