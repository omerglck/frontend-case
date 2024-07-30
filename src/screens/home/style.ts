import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  listContainer: {
    width: '100%',
    marginHorizontal: 15,
    marginVertical: 20,
  },

  separator: {
    width: 10,
  },
  flatListContent: {
    paddingHorizontal: 10,
  },

  promotionListContainer: {
    flex: 1,
    width: '100%',
    padding: 20,
  },
  promotionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginBottom: 10,
  },
  promotionImage: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  promotionText: {
    fontSize: 16,
    color: '#000',
  },
});
