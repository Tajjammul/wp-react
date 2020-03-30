import React, { useEffect } from 'react';
import { StyleSheet, Text, View, AsyncStorage } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/Screens/Home';
import List from './src/Screens/List';
import Search from "./src/Screens/Search";
import Detail from "./src/Screens/Detail";
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import StoreReducer from './src/Hooks/StoreReducer';
import Cart from './src/Components/Cart';

export default function App() {

  const store = createStore(StoreReducer);

  useEffect(() => {
    get_token()
  }, []);

  const get_token = async () => {
    let response = await fetch('http://192.168.1.106:8081/papashop/wp-json/jwt-auth/v1/token/?username=admin&password=admin', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },

    });
    let token_info = await response.json();
    await AsyncStorage.setItem('AUTH_TOKEN', token_info.token);
    return token_info;
  }

  const Stack = createStackNavigator();

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name='Home'
            component={Home}
            options={{ header: () => null }}
          />
          <Stack.Screen
            name='List'
            component={List}
          // options={{ header: () => null }}
          />
          <Stack.Screen
            name="Search"
            component={Search}
          />
          <Stack.Screen
            name="Detail"
            component={Detail}
            options={{ header: () => null }}
          />
        </Stack.Navigator>
      </NavigationContainer>
      <Cart />
    </Provider>
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
