/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {
  useState, useRef, useEffect, useImperativeHandle, forwardRef,
} from 'react';
import {
  SafeAreaView, Text, StatusBar, StyleSheet, Button, TextInput,
} from 'react-native';

const CustomInput = forwardRef((props, ref) => {
  const inputRef = useRef(null);
  const [value, setValue] = useState('');

  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus();
    },
    value: () => value,
    characterCount: () => value.length,
  }));

  return (<TextInput style={styles.input} ref={inputRef} onChangeText={setValue} />);
});


const App = () => {
  const [title, setTitle] = useState('React Native Hooks useImperativeHandle');
  const inputRef = useRef(null);

  const focus = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  useEffect(() => {
    // focus();
  }, []);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>
          {title}
        </Text>
        <CustomInput style={styles.input} ref={inputRef} />
        <Button title="Focus" onPress={() => focus()} />
        <Button title="Character Count" onPress={() => alert(inputRef.current.characterCount())} />
        <Button title="TextInput value" onPress={() => alert(inputRef.current.value())} />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
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
