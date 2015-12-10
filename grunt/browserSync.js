module.exports = {
  server: {
    bsFiles: {
      src: [
        '.jekyll/**/*.html',
        '.tmp/css/**/*.css',
        '{.tmp,<%= yeoman.app %>}/js/**/*.js',
        '{<%= yeoman.app %>}/_assets/bower/**/*.js',
        '<%= yeoman.app %>/img/**/*.{gif,jpg,jpeg,png,svg,webp}'
      ]
    },
    options: {
      server: {
        baseDir: [
          ".jekyll",
          ".tmp",
          "<%= yeoman.app %>"
        ]
      },
      watchTask: true
    }
  },
  dist: {
    options: {
      server: {
        baseDir: "<%= yeoman.dist %>"
      }
    }
  },
  test: {
    bsFiles: {
      src: [
        '.jekyll/**/*.html',
        '.tmp/css/**/*.css',
        '{.tmp,<%= yeoman.app %>}/js/**/*.js',
        '{<%= yeoman.app %>}/_assets/bower/**/*.js',
        '<%= yeoman.app %>/img/**/*.{gif,jpg,jpeg,png,svg,webp}'
      ]
    },
    options: {
      server: {
        baseDir: [
          ".jekyll",
          ".tmp",
          "<%= yeoman.app %>"
        ]
      },
      watchTask: true
    }
  }
}
