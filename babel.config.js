const pak = require('./package.json')

module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        extension: ['.tsx','.ts','.js','.json'],
      }
    ],
    'react-native-reanimated/plugin'
  ]
};
