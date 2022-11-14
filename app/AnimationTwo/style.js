import {StyleSheet} from 'react-native';

export const style = StyleSheet.create({
  container: {
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  debit: {
    height: 200,
    width: 315,
    resizeMode: 'stretch',
    position: 'absolute',
    transform: [
      {
        rotateZ: '90deg',
      },
    ],
  },
});
