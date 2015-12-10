module.exports = {
  options: {
    debugInfo: false,
    lineNumbers: false,
    loadPath: '<%= yeoman.app %>/_assets/bower'
  },
  dist: {
    files: [{
      expand: true,
      cwd: '<%= yeoman.app %>/_assets/_scss',
      src: '**/*.{scss,sass}',
      dest: '.tmp/css',
      ext: '.css'
    }]
  },
  server: {
    options: {
      debugInfo: true,
      lineNumbers: true
    },
    files: [{
      expand: true,
      cwd: '<%= yeoman.app %>/_assets/_scss',
      src: '**/*.{scss,sass}',
      dest: '.tmp/css',
      ext: '.css'
    }]
  }
}
