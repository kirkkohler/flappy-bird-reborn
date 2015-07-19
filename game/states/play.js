'use strict';

function Play() {}
Play.prototype = {
    create: function() {
        /* physics and gravity code gere */
        this.game.physics.startSystem(Phaser.Physics.ARCADE);
        this.game.physics.arcade.gravity.y = 500;

        // add the background sprite
        this.background = this.game.add.sprite(0, 0, 'background');

        // Create a new bird object
        this.bird = new Bird(this.game.width, 100, this.game.height / 2);

        // and add it to the game
        this.game.add.existing(this.bird);
    },
    update: function() {
    },
};

module.exports = Play;