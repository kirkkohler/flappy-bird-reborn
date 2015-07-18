(function() {
  'use strict';

  function Game() {}

  Game.prototype = {
    create: function() {
      /* physics and gravity code gere */
      this.game.physics.startSystem(Phaser.Physics.ARCADE);
      this.game.physics.arcade.gravity.y = 500;

      // add the background sprite
      this.background = this.game.add.sprite(0, 0, 'background');
    },
    update: function() {}
  };

  window['flappy-bird-reborn'] = window['flappy-bird-reborn'] || {};
  window['flappy-bird-reborn'].Game = Game;
}());