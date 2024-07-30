import {View, ActivityIndicator} from 'react-native';
import {styles} from './style';

const Spinner = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator
        size={'large'}
        color={'gray'}
        testID="activity-indicator"
      />
    </View>
  );
};
export default Spinner;
