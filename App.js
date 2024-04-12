import React from 'react';
import {StyleSheet, Text, View, Platform} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {ThemeProvider, createTheme, Button, Stack} from '@rneui/themed';
import Home from './src/screens/Home';
import AppNavigator from './src/navigation/AppNavigator';

const themes = createTheme({
  lightColors: {
    primary: '#e7e7e8',
  },
  darkColors: {
    primary: '#000',
  },
  mode: 'light',
});

// const theme = createTheme({
//   lightColors: {
//     ...Platform.select({
//       default: lightColors.platform.android,
//       ios: lightColors.platform.ios,
//     }),
//   },
// });

const App = () => {
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={themes}>
        <AppNavigator />
      </ThemeProvider>
    </SafeAreaProvider>
  );
};

export default App;

const styles = StyleSheet.create({});
