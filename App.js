/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useMemo, useCallback } from 'react';
import {
  SafeAreaView,
  Text,
  StatusBar,
  StyleSheet,
  TextInput,
  Button,
} from 'react-native';

const CustomInput = ({ onChangeText }) => (
  <TextInput style={styles.input} onChangeText={onChangeText} />
);


const App = () => {
  const [title, setTitle] = useState('React Native Hooks useCallback');
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);

  const calculateCb = useCallback(() => {
    console.log('calculateCb');

    return Number(a) + Number(b);
  }, [a, b]);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <Text>a</Text>
        <CustomInput style={styles.input} onChangeText={setA} />
        <Text>b</Text>
        <CustomInput style={styles.input} onChangeText={setB} />
        <Text>
          Result:
        </Text>
        <Button onPress={calculateCb} title="Calculate" />
        <Button onPress={() => setTitle('New Title')} title="Change Title" />
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
    marginVertical: 8,
  },
});

export default App;
