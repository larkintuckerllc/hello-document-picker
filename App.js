import { DocumentPicker } from 'expo';
import React from 'react';
import { Alert, Button, StyleSheet, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
         <Button
          title="Click Me!"
          onPress={this.handlePress}
        />
      </View>
    );
  }

  async handlePress() {
    try {
      const result = await DocumentPicker.getDocumentAsync();
      console.log(result);
    } catch (err) {
      Alert.alert(
        'Alert',
        err.message,
        [
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ],
        { cancelable: false }
      )
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
