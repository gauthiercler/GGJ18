import FullscreenManager from "../objects/FullscreenManager";
import Phaser from 'phaser'

class Loader extends Phaser.State {

    create() {
        this.initGlobalVariables();
        this.game.state.start('Menu');
    }

    initGlobalVariables() {
        this.game.global = {
            height: window.innerHeight,
            width: window.innerWidth,
            fullscreenManager: new FullscreenManager(this.game)
        };
    }

}

export default Loader;