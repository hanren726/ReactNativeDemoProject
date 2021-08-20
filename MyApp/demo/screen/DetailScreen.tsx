import {Button, Text, View} from 'react-native';
import React from 'react';
import {Header} from '../Header/Header';

const DetailsScreen = ({route, navigation}) => {
  return (
    <View style={{flex: 1}}>
      <Header
        title={'第二级详情页'}
        onLeftPress={() => {
          navigation.goBack();
        }}
      />
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Details Screen</Text>
        <Button
          title={'modify options'}
          onPress={() => navigation.setOptions({title: 'updated!!!'})}
        />
        <Button
          title={'Go To Detail---again'}
          onPress={() => navigation.push('Details')}
        />
        <Button title="Go back" onPress={() => navigation.goBack()} />
        <Button
          title="Go back to first screen in stack"
          onPress={() => navigation.popToTop()}
        />
        <Button
          title="Go back to first screen in stack- popToTop"
          onPress={() => navigation.popToTop()}
        />
        <Button
          title="Go back to first screen in stack- navigate HOME"
          onPress={() => navigation.navigate('HOME')}
        />
      </View>
    </View>
  );
};

export default DetailsScreen;
