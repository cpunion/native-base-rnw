import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Button } from 'native-base'
console.log({Button})
// see https://github.com/necolas/react-native-web

class App extends Component {
  render() {
    return (
      <View>
        <Button style={{backgroundColor: null}}>
          <Text>Hello</Text>
        </Button>
      </View>
    );
  }
}

export default App;
