import React, {useEffect} from 'react';
import {SafeAreaView, View, Text, Dimensions, FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../../app';
import {fetchTags} from '../../app/actions/tagsActions';
import {fetchPromotions} from '../../app/actions/promotionsActions';
import TagItem from '../../components/home/tagItem';
import PromotionCard from '../../components/home/PromotionCard';
import {styles} from './style';
import Header from '../../components/home/header';

const {width: viewportWidth} = Dimensions.get('window');

const HomeScreen = () => {
  const dispatch = useDispatch<AppDispatch>();
  const tags = useSelector((state: RootState) => state.tags.tags);
  const promotions = useSelector(
    (state: RootState) => state.promotions.promotions,
  );
  const status = useSelector((state: RootState) => state.tags.status);

  useEffect(() => {
    dispatch(fetchTags());
    dispatch(fetchPromotions());
  }, [dispatch]);

  useEffect(() => {
    if (status === 'succeeded') {
      console.log('Tags List:', tags);
    }
  }, [status, tags]);

  const renderTagItem = ({item}: {item: any}) => (
    <TagItem iconUrl={item.IconUrl} name={item.Name} />
  );

  const renderPromotionItem = ({item}: {item: any}) => (
    <PromotionCard promotion={item} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <View style={styles.listContainer}>
        {status === 'loading' && <Text>Loading...</Text>}
        {status === 'failed' && <Text>Failed to load tags</Text>}
        {status === 'succeeded' && (
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal
            data={tags}
            renderItem={renderTagItem}
            keyExtractor={item => item.Id.toString()}
            contentContainerStyle={styles.flatListContent}
            ItemSeparatorComponent={() => <View style={styles.separator} />}
          />
        )}
      </View>
      <View style={styles.promotionListContainer}>
        {/* <Carousel
          data={promotions}
          renderItem={renderPromotionItem}
          sliderWidth={viewportWidth}
          itemWidth={viewportWidth * 0.8}
          layout={'default'}
          keyExtractor={item => item.Id.toString()}
        /> */}
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
