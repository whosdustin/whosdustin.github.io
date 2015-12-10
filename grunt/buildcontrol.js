module.exports = {
  dist: {
    options: {
      remote: 'https://github.com/whosdustin/whosdustin.github.io.git',
      branch: 'master',
      commit: true,
      push: true,
      force: true,
      message: '🚀Launched from commit %sourceCommit%'
    }
  }
}
