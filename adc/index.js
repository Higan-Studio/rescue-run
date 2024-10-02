import config from './config.js'
class Game extends Phaser.game {
    consructor () {
        super(config)
    }
} 

window.onload = () => {
    window.game = new Game()
}