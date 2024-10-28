import React, { useContext } from 'react';
import { View, Text, FlatList, SafeAreaView, Image, Pressable } from 'react-native';
import {BookingContext} from '../BookingContext';
import styles from '../styles';
import hotelData from '../hotelData';

//Viser en liste over alle hoteller, og har en knap, der tilføjer hotellet til OrderScreen.
//Her importeres funktionen "addBooking" også fra BookingContext, hvilket giver os muligheden for at sende hotellerne videre til Orderscreen.
function HotelsScreen({ navigation }) {
    const { addBooking } = useContext(BookingContext);

    return (
        <View contentContainerStyle={{ flex: 1, alignItems: 'center'}}>
            <SafeAreaView />
            <FlatList
            data={ hotelData }
            renderItem={({ item }) => (
            <View style={ styles.flatListContainer }>
                <Text style={ styles.titleText }>{item.title}</Text>
                <Image
                source = {{ uri: item.imageUrl }}
                style={ styles.hotelImage }
                />
                <Pressable
                style={ styles.bookHotelButton }
                onPress={() => {
                    addBooking(item);
                    navigation.navigate('Order');
                }}
                >
                <Text style={ styles.bookHotelButtonText }>Book Hotel</Text>
                </Pressable>
            </View>
            )}
            keyExtractor={(item) => item.id.toString()}
            ItemSeparatorComponent={() => <View style={styles.seperator}></View>}
            />
        </View>
    );
}

export default HotelsScreen;