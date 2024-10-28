import { View, Image } from 'react-native';
import styles from '../styles';

//Billede af mockup sættes ind i Settings skærmen.
function SettingsScreen() {
  return (
      <View style={ styles.bookingsImage }>
        <Image
          style={{ height: '100%', width: '100%' }}
          source={require('../Pictures/BookingAppSettings.png')}
          resizeMode='contain'
        />
      </View>
  );
}

export default SettingsScreen;