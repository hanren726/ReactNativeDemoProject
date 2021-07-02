import {Dimensions, Platform, StatusBar} from 'react-native';
import {
  PRO_MAX_12_HEIGHT,
  PRO_MAX_12_WIDTH,
  X12_HEIGHT,
  X12_WIDTH,
  X_HEIGHT,
  X_WIDTH,
  XSMAX_HEIGHT,
  XSMAX_WIDTH,
} from './Constants';

const {height, width} = Dimensions.get('window');

export const isIPhoneX = () =>
  Platform.OS === 'ios' && !Platform.isPad && !Platform.isTVOS
    ? (width === X_WIDTH && height === X_HEIGHT) ||
      (width === XSMAX_WIDTH && height === XSMAX_HEIGHT) ||
      (width === X12_WIDTH && height === X12_HEIGHT) ||
      (width === PRO_MAX_12_WIDTH && height === PRO_MAX_12_HEIGHT)
    : false;

export const StatusBarHeight = Platform.select({
  ios: isIPhoneX() ? 44 : 20,
  android: StatusBar.currentHeight,
  default: 0,
});
