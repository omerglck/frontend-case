import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SCREEN_NAMES} from '../constants/names';

import TabNavigator from './TabNavigator';
import DetailScreen from '../screens/detail';
import {RootStackParamList} from '../types/navigation';

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={SCREEN_NAMES.HOME} component={TabNavigator} />
      <Stack.Screen name={SCREEN_NAMES.DETAIL} component={DetailScreen} />
    </Stack.Navigator>
  );
};
export default RootNavigator;
