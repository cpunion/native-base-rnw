import Platform from 'react-native-web/dist/apis/Platform'

// Patch Platform.OS to make native-base render iOS version
Platform.OS = 'ios'

require('./main')
