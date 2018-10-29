const util = require('util')

/*module.exports = {
  src: 'assets/sprites/img/*.{png,gif,jpg}',
  destImage: 'assets/img/sprite.png',
  destCSS: 'assets/css/sprite.css',
  imgPath: '../img/sprite.png',
  padding: 2,
  algorithm: 'top-down',
  algorithmOpts: { sort: false },
  engine: 'pixelsmith',
  cssOpts: {
    cssClass: function (item) {
      return util.format('.ic-%s:before', item.name)
    }
  }
}
*/
module.exports = {
  src: 'assets/sprites/works/*.{png,gif,jpg}',
  destImage: 'assets/img/worksprite.png',
  destCSS: 'assets/css/worksprite.css',
  imgPath: '../img/worksprite.png',
  padding: 2,
  algorithm: 'top-down',
  algorithmOpts: { sort: false },
  engine: 'pixelsmith',
  cssOpts: {
    cssClass: function (item) {
      return util.format('.bgw-%s', item.name)
    }
  }
}
