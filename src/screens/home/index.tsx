import React, {useEffect, useState} from 'react';
import {SafeAreaView, View, Dimensions, FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Carousel from 'react-native-reanimated-carousel';
import {AppDispatch, RootState} from '../../app';
import {fetchTags} from '../../app/actions/tagsActions';
import {fetchPromotions} from '../../app/actions/promotionsActions';
import TagItem from '../../components/home/tagItem/index';
import Header from '../../components/home/header';
import PromotionCard from '../../components/home/promotionCard';
import {styles} from './style';
import Spinner from '../../components/ui/spinner';

const {width: viewportWidth} = Dimensions.get('window');

const HomeScreen = () => {
  const dispatch = useDispatch<AppDispatch>();
  const tags = useSelector((state: RootState) => state.tags.tags);
  const promotions = useSelector(
    (state: RootState) => state.promotions.promotions,
  );

  const status = useSelector((state: RootState) => state.tags.status);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    dispatch(fetchTags());
    dispatch(fetchPromotions());
  }, [dispatch]);

  const renderTagItem = ({item}: {item: any}) => (
    <TagItem iconUrl={item.IconUrl} name={item.Name} />
  );

  const renderPromotionItem = ({item, index}: {item: any; index: number}) => (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        transform: [{scale: index === activeIndex ? 1 : 0.8}],
        opacity: index === activeIndex ? 1 : 0.5,
      }}>
      <PromotionCard promotion={item} />
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <View style={styles.listContainer}>
        {status === 'loading' && <Spinner />}
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
        <Carousel
          data={promotions}
          renderItem={renderPromotionItem}
          width={viewportWidth * 0.9}
          onSnapToItem={index => setActiveIndex(index)}
        />
        <View style={styles.paginationContainer}>
          {promotions.map((_, index) => (
            <View
              key={index}
              style={[
                styles.paginationDot,
                index === activeIndex ? styles.activeDot : styles.inactiveDot,
              ]}
            />
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
