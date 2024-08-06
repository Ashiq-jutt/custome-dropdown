// In App.js in a new project
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {colors} from 'config/colors';
import * as React from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import LoginScreen from '../screens/LoginScreen';
import Home from '../screens/Home';
import {SafeAreaView} from 'react-native-safe-area-context';

const Stack = createNativeStackNavigator();

export const RootNavigator = () => {
  return (
    <View style={styles.container}>
      <SafeAreaView style={{flex: 0, backgroundColor: colors.primary}} />
      <StatusBar
        translucent={false}
        backgroundColor={colors.primary}
        barStyle={'light-content'}
      />
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={horizontalAnimation}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Register" component={RegisterScreen} />
      </Stack.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
});
