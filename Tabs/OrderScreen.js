import React, { useContext } from 'react';
import { Text, View, Image, FlatList, SafeAreaView, Pressable } from 'react-native';
import { BookingContext } from '../BookingContext';
import styles from '../styles';

//OrderScreen tager data fra "bookedHotels" og sætter det ind i en FlatList på skærmen.
function OrderScreen() {
  const { bookedHotels, clearBookings } = useContext(BookingContext);

  return (
    <View contentContainerStyle={{ flex: 1, alignItems: 'center' }}>
      <SafeAreaView />
        <Text style={{ fontSize: 24, fontWeight: 'bold', textAlign: 'center' }}>Your order:</Text>
    
        <FlatList
          data={bookedHotels}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={ styles.flatListContainer }>
              <Text style={ styles.titleText }>{item.title}</Text>
              <Image source={{ uri: item.imageUrl }} style={ styles.hotelImage } />
            </View>
          )}
          ListEmptyComponent={
            <Text style={{ marginTop: 20, textAlign: 'center' }}>
              No hotels are currently added. Order a hotel through the "Hotels" tab.
            </Text>
          }
          ListFooterComponent={
            bookedHotels.length > 0 && (
              <Pressable style={ styles.clearOrderButton } onPress={clearBookings}>
                <Text style={ styles.clearOrderText }>Clear Orders</Text>
              </Pressable>
            )
          }
          contentContainerStyle={{ paddingBottom: 50 }}
        />
    </View>
  );
}

export default OrderScreen;