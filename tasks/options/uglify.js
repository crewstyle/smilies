module.exports = {
  src: {
    files: {
      //JS version including jQuery package
      './dist/smylies.min.js': [
        './bower_components/jquery/dist/jquery.js',
        './src/smylies.js'
      ],
      //JS version without jQuery package
      './dist/standalone/smylies.min.js': [
        './src/smylies.js'
      ],
    }
  },

  options: {
    preserveComments: 'some'
  }
};
