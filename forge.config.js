module.exports = {
    publishers: [
      {
        name: '@electron-forge/publisher-github',
        config: {
          repository: {
            owner: 'zuDskyy',
            name: 'hero-movie-electron',
          },
          prerelease: false,
          draft: true,
        },
      },
    ],
  }