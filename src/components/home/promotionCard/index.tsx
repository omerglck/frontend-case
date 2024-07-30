import React from 'react';
import {Image, View, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Promotion} from '../../../types/apiResponses';
import {styles} from './style';
import HTMLView from 'react-native-htmlview';
import {SCREEN_NAMES} from '../../../constants/names';
import {RootStackParamList} from '../../../types/navigation';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import RemainingTime from '../../ui/remainingTime';

type PromotionCardNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  typeof SCREEN_NAMES.DETAIL
>;

const PromotionCard = ({promotion}: {promotion: Promotion}) => {
  const navigation = useNavigation<PromotionCardNavigationProp>();

  const handlePress = () => {
    navigation.navigate(SCREEN_NAMES.DETAIL, {id: promotion.Id});
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.imageContainer}>
          <Image source={{uri: promotion.ImageUrl}} style={styles.image} />
          <View style={styles.iconContainer}>
            <Image source={{uri: promotion.BrandIconUrl}} style={styles.icon} />
          </View>
          <RemainingTime
            remainingText={promotion.RemainingText}
            right={10}
            bottom={10}
          />
        </View>
        <View style={styles.description}>
          <HTMLView value={promotion.Title} stylesheet={styles.title} />
        </View>
        <TouchableOpacity onPress={handlePress}>
          <Text
            style={[
              {color: promotion.ListButtonTextBackGroudColor},
              styles.buttonText,
            ]}>
            Daha Fazla
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={[
          {backgroundColor: promotion.ListButtonTextBackGroudColor},
          styles.redBottomArea,
        ]}
      />
    </View>
  );
};

export default PromotionCard;
