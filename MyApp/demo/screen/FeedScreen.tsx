import {Button, Text, View} from 'react-native';
import React from 'react';

/**
 * @author jiaminglei@blacklake.cn
 * @date 2021/8/18 5:35 下午
 * @copyright BlackLake.cn
 */
const FeedScreen = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Feed Screen</Text>
      <Button
        title={'Go To Feed Detail'}
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
};
export default FeedScreen;
