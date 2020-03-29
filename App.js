/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useRef, useEffect } from 'react';
import {
  SafeAreaView, Text, StatusBar, StyleSheet, Button, TextInput,
} from 'react-native';

const App = () => {
  const [title, setTitle] = useState('React Native Hooks useRef');
  const inputRef = useRef(null);

  const focus = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  useEffect(() => {
    focus();
  }, []);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>
          {title}
        </Text>
        <Button title="Change Title" onPress={() => setTitle('New Title useRef')} />
        <TextInput style={styles.input} ref={inputRef} />
        <Button title="Focus" onPress={() => focus()} />
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
    padding: 16,
  },
  input: {
    backgroundColor: 'whitesmoke',
    width: '80%',
    borderRadius: 16,
    paddingHorizontal: 8,
    paddingVertical: 12,
  },
});

export default App;
