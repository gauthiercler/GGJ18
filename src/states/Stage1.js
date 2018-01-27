import Phaser from 'phaser'

import Player from '../objects/Player'

class Stage1 extends Phaser.State {

    preload() {
        this.player = new Player(this.game);
        this.player.loadPlayer();
        this.game.load.image('Dashicon', 'assets/Icon.png');
    }

    create() {
        this.game.physics.startSystem(Phaser.Physics.P2JS);
        this.initBackground();
        this.game.input.mouse.capture = true;
        this.cursors = this.game.input.keyboard.createCursorKeys();
        this.player.createPlayer();
        this.drawUI();
    }

    update() {
        this.player.checkMove(this.cursors);
        if (Date.now() - this.player.lastCall < this.player.cooldown) {
            this.dashicon.alpha = (Date.now() - this.player.lastCall) / this.player.cooldown;
        }
    }

    initBackground() {
        this.game.stage.backgroundColor = '#fff';
    }

    drawUI() {
        this.dashicon = this.game.add.sprite((this.game.width) / 2, this.game.height - 100, 'Dashicon');
        this.dashicon.anchor.set(0.5);
        this.drawTxt();
    }

    drawTxt() {
        let style = { font: "20px Arial", fill: "#000", align: "center" };
        let txt = this.game.add.text(this.game.world.centerX, this.game.height - 50, "Dash", style);
        txt.anchor.set(0.5);
    }

}

export default Stage1;