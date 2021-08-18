import {createNativeStackNavigator} from '@react-navigation/native-stack';
import FeedScreen from './FeedScreen';
import FeedDetailScreen from './FeedDetailScreen';
import React from 'react';
/**
 * @author jiaminglei@blacklake.cn
 * @date 2021/8/18 5:50 下午
 * @copyright BlackLake.cn
 */

const Stack = createNativeStackNavigator();

const FeedStack = ({navigation}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Feed" component={FeedScreen} />
      <Stack.Screen name="FeedDetail" component={FeedDetailScreen} />
    </Stack.Navigator>
  );
};

export default FeedStack;
