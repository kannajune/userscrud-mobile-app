import React from "react";
import { View, Text, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { useNavigation } from "@react-navigation/native";

import Home from "./screens/Home";
import Create from "./screens/Create";
import Update from "./screens/Update";

import { Provider as ReactProvider } from "react-redux";
import configureStore from "./redux/configureStore";

const Stack = createStackNavigator();

const store = configureStore();

export default function App(props) {
  function LogoTitle() {
    return (
      <View>
        <Text>Home</Text>
      </View>
    );
  }

  function AddUser() {
    const navigation = useNavigation();
    return (
      <Button
        title={`Add User`}
        onPress={() => navigation.navigate("Create")}
      />
    );
  }

  return (
    <ReactProvider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              headerTitle: (props) => <LogoTitle {...props} />,
              headerRight: () => <AddUser />,
            }}
          />
          <Stack.Screen name="Create" component={Create} />
          <Stack.Screen name="Update" component={Update} />
        </Stack.Navigator>
      </NavigationContainer>
    </ReactProvider>
  );
}
