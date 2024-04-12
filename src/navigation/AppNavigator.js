import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Button, Icon, Text} from '@rneui/themed';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../screens/Login';
import Register from '../screens/Register';
import ForgotPassword from '../screens/ForgotPassword';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// const BottomNavigator = () => {
//   return (
//     <Tab.Navigator>
//       <Tab.Screen />
//     </Tab.Navigator>
//   )
// };

const AuthNavigator = () => {
  return (
    <Stack.Navigator
      presentation="transparentModal"
      screenOptions={{headerShown: false}}
      initialRouteName="Login">
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
    </Stack.Navigator>
  );
};

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="AuthNavigator"
        screenOptions={({navigation, title}) => ({
          headerRight: ({tintColor}) => (
            <View style={[styles.headerContainer, styles.headerContainerRight]}>
              <Icon
                name="notifications-none"
                type='evil'
                size={Platform.OS === 'ios' ? 21 : 24}
                color={tintColor}
              />
            </View>
          ),
          headerShown: false,
          headerTitle: {title},
        })}>
        <Stack.Screen name="AuthNavigator" component={AuthNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;

const styles = StyleSheet.create({
  headerContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    ...Platform.select({
      ios: null,
      default: {
        marginVertical: 3,
        marginHorizontal: 11,
      },
    }),
  },
  headerContainerRight: Platform.select({ios: {marginRight: 8}}),
  headerIcon: Platform.select({
    ios: {
      marginVertical: 12,
      resizeMode: 'contain',
      transform: [{scaleX: I18nManager.isRTL ? -1 : 1}],
    },
    default: {
      margin: 3,
      resizeMode: 'contain',
    },
  }),
  headerIconRight: Platform.select({ios: {marginLeft: 6}}),
});
