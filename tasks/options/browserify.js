module.exports = {
  dist: {
    files: {
      'public/scripts/app.js': ['components/app.jsx'],
    },
    options: {
      transform: ['reactify']
    }
  }
};
