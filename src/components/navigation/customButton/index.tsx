import React from 'react';
import {TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import CustomIcon from '../../../assets/icons/Custom';
import styles from './style';
import {SCREEN_NAMES} from '../../../constants/names';
import {NavigationProps} from '../../../types/navigation';

// interface CustomButtonProps extends SvgProps {}

function CustomButton() {
  const navigation = useNavigation<NavigationProps>();

  function handlePress() {
    navigation.navigate(SCREEN_NAMES.HOME);
  }

  return (
    <TouchableOpacity style={styles.button} onPress={handlePress}>
      <CustomIcon />
    </TouchableOpacity>
  );
}

export default CustomButton;
