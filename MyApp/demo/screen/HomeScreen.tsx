import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FeedScreen from './FeedScreen';
import MessagesScreen from './MessagesScreen';

/**
 * @author jiaminglei@blacklake.cn
 * @date 2021/8/18 5:34 下午
 * @copyright BlackLake.cn
 */
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
