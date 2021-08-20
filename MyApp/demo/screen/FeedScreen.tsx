import {Button, Text, View} from 'react-native';
import React from 'react';

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
