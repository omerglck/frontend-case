import React, {useEffect, useMemo} from 'react';
import {
  View,
  Text,
  Image,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  useWindowDimensions,
} from 'react-native';
import {useRoute, RouteProp, useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../../app';
import {RootStackParamList} from '../../types/navigation';
import {fetchPromotionById} from '../../app/actions/promotionDetailActions';
import {SCREEN_NAMES} from '../../constants/names';
import Back from '../../assets/icons/Back';
import RemainingTime from '../../components/ui/remainingTime';
import RenderHtml from 'react-native-render-html';
import {styles} from './style';
import Spinner from '../../components/ui/spinner';

type DetailScreenRouteProp = RouteProp<
  RootStackParamList,
  typeof SCREEN_NAMES.DETAIL
>;

const DetailScreen = () => {
  const route = useRoute<DetailScreenRouteProp>();
  const {id} = route.params;
  const dispatch = useDispatch<AppDispatch>();
  const {promotionDetail, loading, error} = useSelector(
    (state: RootState) => state.promotionDetail,
  );

  const navigation = useNavigation();
  const {width} = useWindowDimensions();

  useEffect(() => {
    dispatch(fetchPromotionById(id));
  }, [dispatch, id]);

  const getButtonColor = (htmlText: string) => {
    const regex = /color:\s*(#[0-9a-fA-F]{6})/;
    const match = htmlText.match(regex);
    return match ? match[1] : '#D00013';
  };

  const buttonColor = promotionDetail
    ? getButtonColor(promotionDetail.BrandPromotionCardParticipationText)
    : '#D00013';

  const backgroundColor = promotionDetail
    ? promotionDetail.PromotionCardColor
    : '#FFFFFF';

  const tagsStyles = useMemo(
    () => ({
      p: {
        color: 'black',
        fontSize: 24,
        fontWeight: '700',
        marginVertical: 15,
      },
      span: {
        color: 'black',
        fontSize: 24,
        fontWeight: '700',
      },
    }),
    [],
  );

  const descriptionStyles = useMemo(
    () => ({
      p: {
        color: 'black',
        fontSize: 14,
        fontWeight: '400',
      },
      span: {
        color: 'black',
        fontSize: 14,
        fontWeight: '400',
      },
    }),
    [],
  );

  return (
    <SafeAreaView style={[styles.container, {backgroundColor}]}>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.imageContainer}>
              <Image
                source={{uri: promotionDetail?.ImageUrl}}
                style={styles.image}
              />
              <TouchableOpacity
                style={styles.backBtn}
                onPress={() => navigation.goBack()}>
                <Back />
              </TouchableOpacity>
              <View style={styles.iconContainer}>
                <Image
                  source={{uri: promotionDetail?.BrandIconUrl}}
                  style={styles.icon}
                />
              </View>
              {promotionDetail && (
                <RemainingTime
                  remainingText={promotionDetail.RemainingText}
                  bottom={15}
                  right={15}
                />
              )}
            </View>
            <View style={styles.contentContainer}>
              {loading && <Text>Loading...</Text>}
              {error && <Text>Error: {error}</Text>}
              {promotionDetail && (
                <View style={styles.textContainer}>
                  <RenderHtml
                    contentWidth={width}
                    source={{html: promotionDetail.Title}}
                    tagsStyles={tagsStyles}
                    defaultTextProps={{style: {color: 'black'}}}
                  />
                  <RenderHtml
                    contentWidth={width}
                    source={{html: promotionDetail.Description}}
                    tagsStyles={descriptionStyles}
                    defaultTextProps={{style: {color: 'black'}}}
                  />
                  {promotionDetail.PromotionDetailItemAreas.map(
                    (item, index) => (
                      <View key={index} style={styles.detailItemContainer}>
                        <RenderHtml
                          contentWidth={width}
                          source={{html: item.Title}}
                          tagsStyles={tagsStyles}
                          defaultTextProps={{style: {color: 'black'}}}
                        />
                        <RenderHtml
                          contentWidth={width}
                          source={{html: item.Description}}
                          tagsStyles={descriptionStyles}
                          defaultTextProps={{style: {color: 'black'}}}
                        />
                      </View>
                    ),
                  )}
                </View>
              )}
            </View>
          </ScrollView>
          <TouchableOpacity
            style={[styles.fixedButton, {backgroundColor: buttonColor}]}>
            <Text style={styles.buttonText}>Hemen Katıl</Text>
          </TouchableOpacity>
        </>
      )}
    </SafeAreaView>
  );
};
export default DetailScreen;
