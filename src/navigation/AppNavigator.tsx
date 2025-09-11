import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import AddVehicleScreen from '../screens/AddVehicleScreen';
import MileageEntryScreen from '../screens/MileageEntryScreen';
import EditVehicleScreen from '../screens/EditVehicleScreen';
import VehicleListScreen from '../screens/VehicleListScreen';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="AddVehicle" component={AddVehicleScreen} />
      <Stack.Screen name="AddMileage" component={MileageEntryScreen} />
      <Stack.Screen name="VehicleList" component={VehicleListScreen} />
      <Stack.Screen name="EditVehicle" component={EditVehicleScreen} />
    </Stack.Navigator>
  );
}
