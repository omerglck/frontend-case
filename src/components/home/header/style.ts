import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 40,
    marginTop: 40,
    marginHorizontal: 15,
  },
  btnContainer: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconBackground: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F40000',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  notificationDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    borderColor: '#fff',
    borderWidth: 1.5,
    backgroundColor: '#4caf50',
    position: 'absolute',
    top: 0,
    right: 0,
  },
});
