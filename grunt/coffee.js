module.exports = {
  dist: {
    files: [{
      expand: true,
      cwd: '<%= yeoman.app %>/_src',
      src: '**/*.coffee',
      dest: '.tmp/js',
      ext: '.js'
    }]
  },
  test: {
    files: [{
      expand: true,
      cwd: 'test/spec',
      src: '**/*.coffee',
      dest: '.tmp/spec',
      ext: '.js'
    }]
  }
}
