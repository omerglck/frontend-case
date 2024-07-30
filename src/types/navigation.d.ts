import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {SCREEN_NAMES} from '../constants/names';

export type RootStackParamList = {
  [SCREEN_NAMES.HOME]: undefined;
  [SCREEN_NAMES.WALLET]: undefined;
  [SCREEN_NAMES.DETAIL]: {id: string};
};

export type NavigationProps = NativeStackNavigationProp<
  RootStackParamList,
  typeof SCREEN_NAMES.HOME
>;
