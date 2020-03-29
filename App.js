/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useEffect } from 'react';
import {
  SafeAreaView, Text, StatusBar, StyleSheet, Button,
} from 'react-native';

const ComponentWillUnmount = () => {
  useEffect(() => {
    console.log('ComponentWillUnmount didmount gibi calisir');

    return () => {
      console.log('ComponentWillUnmount ----');
    };
  });

  return <Text>ComponentWillUnmount</Text>;
};

const App = () => {
  const [title, setTitle] = useState('React Native Hooks useEffect');
  const [counter, setCounter] = useState(0);
  const [show, setShow] = useState(true);

  useEffect(() => {
    console.log('Her state gunncellendiginde', counter);
  });

  useEffect(() => {
    console.log('componentDidMount gibi calisir.', counter);

    return () => {
      console.log('componentWillUnmount');
    };
  }, []);

  useEffect(() => {
    console.log(title, counter);
  }, [title]);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>
          {title}
        </Text>
        <Button title="Change Title" onPress={() => setTitle('New Title')} />
        <Button title="Increase  Counter" onPress={() => setCounter(counter + 1)} />
        <Button title="Change Show" onPress={() => setShow(!show)} />
        {show && <ComponentWillUnmount />}
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
