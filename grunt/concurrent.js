module.exports = {
  server: [
    'sass:server',
    'coffee:dist',
    'copy:stageCss',
    'jekyll:server'
  ],
  dist: [
    'sass:dist',
    'coffee:dist',
    'copy:dist'
  ]
}
