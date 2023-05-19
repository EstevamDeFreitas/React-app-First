import { StyleSheet } from 'react-native';
import { theme } from '../../global/style/theme';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 56,
    backgroundColor: theme.colors.secondary100,
    borderRadius: 18,
    flexDirection: 'row',
    alignItems: 'center'
  },
  title: {
    flex: 1,
    color: theme.colors.white,
    fontSize: 20,
    textAlign: 'center',
  }

});