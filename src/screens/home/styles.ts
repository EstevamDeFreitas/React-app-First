import { StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 0
    },
    scrollview:{
      width:'90%'
    },
    image: {
      width: '100%',
      height: 360,
    },
    imageLogo: {
      marginTop: 5,
      marginBottom: 5
    },
    content: {
      marginTop: -15,
      paddingHorizontal: 50
    },
    title: {
      color: '#DDE3F0',
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: 40,
      marginBottom: 5,
      lineHeight: 40
    },
    subtitle: {
      color: '#DDE3F0',
      fontSize: 20
      ,
      textAlign: 'center',
      marginBottom: 10,
      lineHeight: 25
    }
  
  });