import { View, Image } from 'react-native';
import styles from '../styles';

//Billede af mockup sættes ind i Bookings skærmen.
function BookingsScreen() {
  return (
      <View style={ styles.bookingsImage }>
        <Image
          style={{ height: '100%', width: '100%' }}
          source={require('../Pictures/BookingAppBookings.png')}
          resizeMode='contain'
        />
      </View>
  );
}

export default BookingsScreen;