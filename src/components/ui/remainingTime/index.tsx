import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './style';

type RemainingTimeProps = {
  remainingText: string;
  top?: number;
  left?: number;
  bottom?: number;
  right?: number;
};

const RemainingTime: React.FC<RemainingTimeProps> = ({
  remainingText,
  top,
  left,
  bottom,
  right,
}) => {
  const calculateRemainingDays = (remainingText: string): number => {
    const [day, month, year] = remainingText.split('.').map(Number);
    const targetDate = new Date(year, month - 1, day);
    const today = new Date();

    const differenceInTime = targetDate.getTime() - today.getTime();
    const differenceInDays = Math.ceil(differenceInTime / (1000 * 3600 * 24));

    return differenceInDays;
  };

  const remainingDays = calculateRemainingDays(remainingText);

  return (
    <View style={[styles.textContainer, {top, left, bottom, right}]}>
      <Text style={styles.text}>{`son ${remainingDays} gün`}</Text>
    </View>
  );
};

export default RemainingTime;
