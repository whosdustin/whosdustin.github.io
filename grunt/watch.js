module.exports = {
  sass: {
    files: ['<%= yeoman.app %>/_assets/_scss/**/*.{scss,sass}'],
    tasks: ['sass:server', 'autoprefixer:dist']
  },
  autoprefixer: {
    files: ['<%= yeoman.app %>/css/**/*.css'],
    tasks: ['copy:stageCss', 'autoprefixer:dist']
  },
  coffee: {
    files: ['<%= yeoman.app %>/_src/**/*.coffee'],
    tasks: ['coffee:dist']
  },
  coffeeTest: {
    files: ['test/spec/**/*.coffee'],
    tasks: ['coffee:test']
  },
  jekyll: {
    files: [
      '<%= yeoman.app %>/**/*.{html,yml,md,mkd,markdown}',
      '!<%= yeoman.app %>/bower/**/*'
    ],
    tasks: ['jekyll:server']
  }
}
