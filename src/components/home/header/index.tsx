import Logo from '../../../assets/icons/Logo';
import Profile from '../../../assets/icons/Profile';
import {styles} from './style';
import {TouchableOpacity, View} from 'react-native';

const Header = () => {
  return (
    <View style={styles.container}>
      <View>
        <Logo />
      </View>
      <TouchableOpacity style={styles.btnContainer}>
        <View style={styles.iconBackground}>
          <Profile />
        </View>
        <View style={styles.notificationDot} />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
