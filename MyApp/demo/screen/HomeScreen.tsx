import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FeedScreen from './FeedScreen';
import MessagesScreen from './MessagesScreen';

export type MainStackParamsList = {
  FeedStack: undefined;
  Messages: undefined;
};

const Tab = createBottomTabNavigator();
const HomeScreen = ({navigation}) => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="FeedStack" component={FeedScreen} />
      <Tab.Screen name="Messages" component={MessagesScreen} />
    </Tab.Navigator>
  );
};
export default HomeScreen;
