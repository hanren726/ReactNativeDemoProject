import {
  Platform,
  SafeAreaView,
  StatusBar,
  View,
  Text,
  StyleSheet,
} from 'react-native';
import React from 'react';
import {StatusBarHeight} from '../util';

/**
 * @author jiaminglei@blacklake.cn
 * @date 2021/7/2 3:32 下午
 * @copyright BlackLake.cn
 */

interface HeaderProps {
  translucent?: boolean;
  backgroundColor?: string;
  title?: string;
  leftComponent?: React.ReactNode;
  centerComponent?: React.ReactNode;
  rightComponent?: React.ReactNode;
}

export const Header: React.FC<HeaderProps> = (props: HeaderProps) => {
  const {
    translucent = false,
    backgroundColor,
    title = '标题',
    leftComponent,
    centerComponent,
    rightComponent,
  } = props;
  return (
    <>
      <StatusBar
        barStyle={'dark-content'}
        translucent={translucent}
        backgroundColor={'transparent'}
      />
      <View
        style={{
          backgroundColor: backgroundColor,
        }}>
        <SafeAreaView
          style={{
            height: Platform.OS === 'ios' ? 44 + StatusBarHeight : 44,
            marginTop: translucent ? StatusBar.currentHeight : 0,
          }}>
          <View style={styles.container}>
            {leftComponent || <Text style={{width: 30}}>{'<'}</Text>}
            {centerComponent || (
              <View
                style={{
                  flex: 1,
                  alignItems: 'center',
                }}>
                <Text>{title}</Text>
              </View>
            )}
            {rightComponent || <Text style={{width: 30}}>{''}</Text>}
          </View>
        </SafeAreaView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    height: 44,
  },
});
