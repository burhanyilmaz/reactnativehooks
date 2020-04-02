/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useContext, useReducer } from 'react';
import {
  SafeAreaView,
  Text,
  StatusBar,
  StyleSheet,
  TextInput,
  Button,
  View,
} from 'react-native';

const themes = {
  light: {
    foreground: '#000000',
    background: '#eeeeee',
  },
  dark: {
    foreground: '#ffffff',
    background: '#222222',
  },
};

const ThemeContext = React.createContext();

const CustomInput = ({ onChangeText }) => (
  <TextInput
    style={styles.input}
    onChangeText={onChangeText}
  />
);


const Card = () => {
  const { state, dispatch } = useContext(ThemeContext);

  return (
    <>
      <View style={{
        backgroundColor: themes[state.mode].background, width: 300, height: 300, justifyContent: 'center', alignItems: 'center',
      }}
      >
        <Text style={{ color: themes[state.mode].foreground }}>Card Component</Text>
      </View>
      <Button title="Change Theme" onPress={() => dispatch({ type: 'ChangeTheme', mode: state.mode === 'dark' ? 'light' : 'dark' })} />
    </>
  );
};

const ThemeReducer = (state, action) => {
  switch (action.type) {
    case 'ChangeTheme':
      return { ...state, mode: action.mode };
    default:
      return state;
  }
};

const App = () => {
  const [title, setTitle] = useState('React Native Hooks useContext');
  const [state, dispatch] = useReducer(ThemeReducer, { mode: 'dark' });


  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <Button onPress={() => setTitle('New Title')} title="Change Title" />
        <Card />
      </SafeAreaView>
    </ThemeContext.Provider>
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
