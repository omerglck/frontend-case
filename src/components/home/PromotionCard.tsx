import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {Promotion} from '../../types/apiResponses';

const PromotionCard = ({promotion}: {promotion: Promotion}) => {
  return (
    <View
      style={[styles.card, {backgroundColor: promotion.PromotionCardColor}]}>
      <Image source={{uri: promotion.ImageUrl}} style={styles.promoImage} />
      <View style={styles.brandContainer}>
        <Image
          source={{uri: promotion.BrandIconUrl}}
          style={styles.brandIcon}
        />
        <Text style={styles.remainingText}>{promotion.RemainingText}</Text>
      </View>
      <Text style={styles.title}>
        {promotion.Title.replace(/<[^>]+>/g, '')}
      </Text>
      <Text style={styles.participationText}>
        {promotion.BrandPromotionCardParticipationText.replace(/<[^>]+>/g, '')}
      </Text>
      <Text style={styles.buttonText}>
        {promotion.ListButtonText.replace(/<[^>]+>/g, '')}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    marginBottom: 15,
    padding: 10,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  promoImage: {
    width: '100%',
    height: 150,
    borderRadius: 8,
  },
  brandContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  brandIcon: {
    width: 50,
    height: 50,
  },
  remainingText: {
    fontSize: 14,
    color: '#888',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  participationText: {
    fontSize: 14,
    color: '#000',
    marginBottom: 10,
  },
  buttonText: {
    fontSize: 14,
    color: '#FFF',
    backgroundColor: '#D00013',
    padding: 5,
    borderRadius: 5,
    textAlign: 'center',
  },
});

export default PromotionCard;
