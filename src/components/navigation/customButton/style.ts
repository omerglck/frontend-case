import {Dimensions, StyleSheet} from 'react-native';

const {width} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: -30,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  button: {
    width: 69,
    height: 69,
    borderRadius: 25,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    position: 'absolute',
    bottom: 10,
    left: width / 2 - 35,
    borderWidth: 3,
    borderTopColor: '#009639',
    borderLeftColor: '#F40000',
    borderRightColor: '#F1DE02',
    borderBottomColor: '#FF8300',
  },
});

export default styles;
