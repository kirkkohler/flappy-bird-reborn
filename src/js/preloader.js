(function() {
  'use strict';

  function Preloader() {
    this.asset = null;
    this.ready = false;
  }

  Preloader.prototype = {
    preload: function() {
      console.log('begin preload state');

      this.asset = this.add.sprite(this.width / 2, this.height / 2, 'preloader');
      this.asset.anchor.setTo(0.5, 0.5);

      this.load.onLoadComplete.addOnce(this.onLoadComplete, this);
      this.load.setPreloadSprite(this.asset);
      this.load.image('background', 'assets/background.png');
      this.load.image('ground', 'assets/ground.png');
      this.load.image('title', 'assets/title.png');
      this.load.spritesheet('bird', 'assets/bird.png', 34, 24, 3);
      this.load.image('startButton', 'assets/start-button.png');
    },
    create: function() {
      this.asset.cropEnabled = false;
    },
    update: function() {
      if (!!this.ready) {
        this.game.state.start('game');
      }
    },
    onLoadComplete: function() {
      this.ready = true;
    }
  };

  window['flappy-bird-reborn'] = window['flappy-bird-reborn'] || {};
  window['flappy-bird-reborn'].Preloader = Preloader;
}());