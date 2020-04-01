/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useReducer } from 'react';
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

const TYPES = {
  ADD: 'ADD',
  SUBTRACT: 'SUBTRACT',
  MULTIPLY: 'MULTIPLY',
};
const reducer = (state, action) => {
  switch (action.type) {
    case TYPES.ADD:
      return { ...state, result: Number(action.a) + Number(action.b) };
    case TYPES.SUBTRACT:
      return { ...state, result: Number(action.a) - Number(action.b) };
    case TYPES.MULTIPLY:
      return { ...state, result: Number(action.a) * Number(action.b) };
    default:
      return state;
  }
};

const App = () => {
  const [title, setTitle] = useState('React Native Hooks useReducer');
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [{ result }, dispatch] = useReducer(reducer, { result: 0 });

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <Button onPress={() => setTitle('New Title')} title="Change Title" />
        <CustomInput onChangeText={setA} />
        <CustomInput onChangeText={setB} />
        <Text>
          Result:
          {' '}
          {result}
        </Text>
        <Button
          onPress={() => dispatch({
            type: TYPES.ADD,
            a,
            b,
          })}
          title="ADD"
        />

        <Button
          onPress={() => dispatch({
            type: TYPES.SUBTRACT,
            a,
            b,
          })}
          title="SUBTRACT"
        />

        <Button
          onPress={() => dispatch({
            type: TYPES.MULTIPLY,
            a,
            b,
          })}
          title="MULTIPLY"
        />

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
