(function() {
  'use strict';

  /*var Bird = require('prefabs/bird');*/

  function Game() {
  }

  Game.prototype = {
    create: function() {
      /* physics and gravity code gere */
      this.game.physics.startSystem(Phaser.Physics.ARCADE);
      this.game.physics.arcade.gravity.y = 500;

      // add the background sprite
      this.background = this.game.add.sprite(0, 0, 'background');

      // Create a new bird object
      this.bird = new Bird(this.game.width, 100, this.game.height / 2);
      console.log('where ar e u?');
      // and add it to the game
      this.game.add.existing(this.bird);
    },
    update: function() {}
  };

  window['flappy-bird-reborn'] = window['flappy-bird-reborn'] || {};
  window['flappy-bird-reborn'].Game = Game;
}());