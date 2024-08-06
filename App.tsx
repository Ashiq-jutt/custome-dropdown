import {NavigationContainer} from '@react-navigation/native';
import React, {useState} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import {store} from './src/store';
import {RootNavigator} from './src/navigation/root-navigation';
const App = () => {
  return (
    <SafeAreaProvider style={{flex: 1}}>
      <Provider store={store}>
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
      </Provider>
    </SafeAreaProvider>
  );
};
export default App;
