module.exports = {
  app: {
    script: 'app.js',
    options: {
      ignore: ['node_modules/**', 'public/**'],
      ext: 'js,jsx',
      watch: ['.'],
      delay: 1
    }
  }
};
