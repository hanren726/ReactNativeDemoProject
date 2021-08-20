import {Button, Text, View} from 'react-native';
import React from 'react';
import {Header} from '../Header/Header';

const FeedDetailScreen = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <Header
        title={'第一级详情页'}
        onLeftPress={() => {
          navigation.goBack();
        }}
      />
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Feed Detail Screen</Text>
        <Button
          title={'go sub detail'}
          onPress={() => {
            navigation.navigate('SubDetail');
          }}
        />
      </View>
    </View>
  );
};
export default FeedDetailScreen;
