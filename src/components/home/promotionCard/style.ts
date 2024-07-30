import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  title: {
    span: {
      color: '#000',
      textAlign: 'center',
      fontSize: 14,
      fontWeight: '700',
      alignItems: 'center',
    },
  },
  container: {
    width: 305,
    height: 378,
    backgroundColor: 'white',
    borderRadius: 16,
    alignItems: 'center',
  },
  image: {
    width: 295,
    height: 247,
    borderRadius: 16,
    marginTop: 5,
    borderBottomStartRadius: 100,
    position: 'relative',
  },
  imageContainer: {
    alignItems: 'center',
  },
  iconContainer: {
    backgroundColor: 'white',
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: 10,
    bottom: 0,
  },
  icon: {
    width: 55,
    height: 55,
    borderRadius: 35,
  },
  textContainer: {
    backgroundColor: '#1D1E1C',
    position: 'absolute',
    right: 10,
    bottom: 10,
    paddingHorizontal: 10,
    paddingVertical: 7,
    borderRadius: 12,
  },
  text: {
    color: 'white',
  },
  description: {
    width: 250,
    marginVertical: 15,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 14,
    fontWeight: '700',
  },

  redBottomArea: {
    width: '100%',
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    transform: [{rotate: '2.2deg'}],
    position: 'absolute',
    bottom: 7,
    zIndex: -1000,
  },
  card: {
    alignItems: 'center',
    height: 362,
    borderRadius: 16,
    paddingBottom: 20,
    width: '100%',
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: '#f5f5f5',
    backgroundColor: 'white',
  },
});
