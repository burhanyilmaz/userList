import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import UserList from 'screens/UserList';
import UserDetail from 'screens/UserDetail';
import { Provider } from 'react-redux';
import { store } from 'store';
import { Screen } from './Screens';

const Stack = createNativeStackNavigator();

export type MainNavigatorParamList = {
  [Screen.USER_LIST]: undefined;
  [Screen.USER_DETAILS]: undefined;
};

const commonOptions: NativeStackNavigationOptions = {
  headerShown: false,
};

const MainNavigator = () => (
  <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={Screen.USER_LIST} component={UserList} options={commonOptions} />
        <Stack.Screen name={Screen.USER_DETAILS} component={UserDetail} options={commonOptions} />
      </Stack.Navigator>
    </NavigationContainer>
  </Provider>
);

export default MainNavigator;
