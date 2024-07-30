import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    position: 'relative',
  },
  image: {
    width: '100%',
    height: 325,
    borderBottomStartRadius: 120,
  },
  backBtn: {
    backgroundColor: '#1D1E1C',
    alignItems: 'center',
    justifyContent: 'center',
    width: 40,
    height: 40,
    borderRadius: 20,
    position: 'absolute',
    top: 30,
    left: 15,
  },
  iconContainer: {
    backgroundColor: '#fff',
    position: 'absolute',
    bottom: 0,
    left: 10,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: '#fff',
  },
  icon: {
    width: 55,
    height: 55,
    borderRadius: 35,
  },
  textContainer: {
    padding: 20,
  },
  contentContainer: {
    padding: 10,
  },
  detailItemContainer: {
    marginTop: 20,
  },
  fixedButton: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    backgroundColor: '#D00013',
    paddingVertical: 15,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
