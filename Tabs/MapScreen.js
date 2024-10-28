import React, { useEffect, useState } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { View, Pressable, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import hotelData from '../hotelData';
import styles from '../styles';

//Her sættes kortet op, pins bliver gemt, tilføjet og fjernet samt hentet fra AsyncStorage, hvis der er nogle.
function MapScreen() {
    const [markers, setMarkers] = useState([]);

    const loadMarkers = async () => {
        try {
            const savedMarkers = await AsyncStorage.getItem('markers');
            if(savedMarkers) {
                setMarkers(JSON.parse(savedMarkers));
            }
        } catch (error) {
            console.error("Error loading markers:", error);
        }
    };

    const saveMarkers = async (newMarkers) => {
        try {
            await AsyncStorage.setItem('markers', JSON.stringify(newMarkers));
            setMarkers(newMarkers);
        } catch (error) {
            console.error("Error saving custom markers:", error);
        }
    };

    const addMarker = (coordinate) => {
        const newMarker = {
            id: Date.now().toString(),
            coordinate,
            title: `Custom Marker ${markers.length + 1}`,
        };
        const updatedMarkers = [...markers, newMarker];
        saveMarkers(updatedMarkers);
    };

    const clearMarkers = async () => {
        try {
            await AsyncStorage.removeItem('markers');
            setMarkers([]);
        } catch (error) {
            console.error("Error clearing custom markers:", error);
        }
    };

    useEffect(() => {
        loadMarkers();
    }, []);

    const allMarkers = [
        ...hotelData.map(hotel => ({
        id: hotel.id,
        coordinate: hotel.coordinate,
        title: hotel.title,
        })),
        ...markers
    ];

    return (
        <View style={{ flex: 1 }}>
            <Text style={ styles.mapText }>Place custom markers by tapping and holding</Text>
            <MapView style={{ width: '100%', height: '78%' }}
                initialRegion={{
                    latitude: 55.676098,
                    longitude: 12.568337,
                    latitudeDelta: 0.04,
                    longitudeDelta: 0.07,
                }}
                onLongPress={(e) => addMarker(e.nativeEvent.coordinate)}
            >
                {allMarkers.map(marker => (
                    <Marker 
                        key={marker.id}
                        coordinate={marker.coordinate}
                        title={marker.title}
                    />
                ))}
            </MapView>
            <Pressable style={ styles.bookHotelButton } onPress={clearMarkers}>
                <Text style={ styles.bookHotelButtonText }>Remove Custom Markers</Text>
            </Pressable>
        </View>
    );
}

export default MapScreen;