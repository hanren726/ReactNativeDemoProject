import {createNativeStackNavigator} from '@react-navigation/native-stack';
import FeedDetailScreen from './FeedDetailScreen';
import React from 'react';
import DetailScreen from './DetailScreen';
/**
 * @author jiaminglei@blacklake.cn
 * @date 2021/8/18 5:50 下午
 * @copyright BlackLake.cn
 */

const Stack = createNativeStackNavigator();

const MainStack = ({navigation}) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        headerStyle: {
          backgroundColor: '#f4511e',
        },
      }}>
      <Stack.Screen name="FeedDetail" component={FeedDetailScreen} />
      <Stack.Screen name="SubDetail" component={DetailScreen} />
    </Stack.Navigator>
  );
};

export default MainStack;
