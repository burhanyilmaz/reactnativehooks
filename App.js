/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import {
  SafeAreaView, Text, StatusBar, StyleSheet, Button,
} from 'react-native';

const App = () => {
  const test = useState('test 1');
  const [title, setTitle] = useState('React Native Hooks V1');
  const [counter, setCounter] = useState(0);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>
          {title}
          {' '}
-
          {' '}
          {counter}
        </Text>
        <Button title="Change Title" onPress={() => setTitle(' New Title')} />
        <Button title="Increase Counter" onPress={() => setCounter(counter + 1)} />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
