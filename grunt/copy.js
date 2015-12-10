module.exports = {
  dist: {
    files: [{
      expand: true,
      dot: true,
      cwd: '<%= yeoman.app %>',
      src: [
        // Jekyll processes and moves HTML and text files.
        // Usemin moves CSS and javascript inside of Usemin blocks.
        // Copy moves asset files and directories.
        'img/**/*',
        'fonts/**/*',
        // Like Jekyll, exclude files & folders prefixed with an underscore.
        '!**/_*{,/**}',
        // Explicitly add any files your site needs for distribution here.
        // '_bower_components/jquery/dist/jquery.min.js',
        // '_bower_components/jquery-validate/dist/jquery.validate.min.js',

        'favicon.ico',
        //'apple-touch*.png'
        //'README.md',
        'robots.txt',
        'CNAME'
      ],
      dest: '<%= yeoman.dist %>'
    },
    {
      // Move Resume into directory
      expand: true,
      dot: true,
      cwd: '<%= yeoman.app %>/_data/',
      src: ['*.pdf'],
      dest: '<%= yeoman.dist %>/cv/',
      filter: 'isFile'
    }
  ]
  },
  // Copy CSS into .tmp directory for Autoprefixer processing
  stageCss: {
    files: [{
      expand: true,
      dot: true,
      cwd: '<%= yeoman.app %>/css',
      src: '**/*.css',
      dest: '.tmp/css'
    }]
  }
}
