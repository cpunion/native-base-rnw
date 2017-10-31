var path = require('path')
var paths = require('react-scripts/config/paths')

function findLoader(config, callback) {
  var index = config.module.rules[1].oneOf.findIndex(callback)
  if (index === -1) throw Error('Loader not found')
  return config.module.rules[1].oneOf[index]
}

module.exports = function(config, isDevelopment) {
  config.resolve.extensions = ['.web.js', '.js', '.json', '.jsx', '.ios.js']
  config.resolve.alias = {
    'react-native/Libraries/Renderer/shims/ReactNativePropRegistry': 'react-native-web/dist/modules/ReactNativePropRegistry/index.js',
    'react-native': 'react-native-web'
  }
  var modules = [
    'native-base-shoutem-theme',
    'react-native-keyboard-aware-scroll-view',
    'react-native-drawer',
    'react-native-easy-grid',
    'react-native-vector-icons'
  ].map(function(moduleName) {
    return path.resolve(paths.appNodeModules, moduleName)
  })

  var babelLoader = findLoader(config, function(loader) {
    return loader.loader.indexOf('babel-loader') >= 0
  })
  babelLoader.include = [paths.appSrc].concat(modules)

  // console.log(JSON.stringify(config, undefined, 4))
}
