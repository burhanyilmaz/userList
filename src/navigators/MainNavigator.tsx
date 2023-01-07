import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import UserList from 'screens/UserList';
import UserDetail from 'screens/UserDetail';

const Stack = createNativeStackNavigator();

export type MainNavigatorParamList = {
  UserList: undefined;
  UserDetail: undefined;
};

const commonOptions: NativeStackNavigationOptions = {
  headerShown: false,
};

const MainNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="UserList" component={UserList} options={commonOptions} />
      <Stack.Screen name="UserDetail" component={UserDetail} options={commonOptions} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default MainNavigator;
