/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  Button,
  SafeAreaView,
  StyleSheet,
  View,
} from 'react-native';
import { loadGame } from "react-native-omantel_library_sample";


function App(): JSX.Element {


  return (
    <SafeAreaView style={styles.backgroundStyle}>
      <Button onPress={() => { loadGame() }} title='Load...' />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  backgroundStyle: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  }
});

export default App;
