import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {WebView} from 'react-native';

export default function App() {
  return (
    <WebView
      source={{uri: 'http://3.13.86.191/store/'}}
      style={{marginTop: 20}}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
