import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

//Her laves der en context, som tillader mig at dele data på tværs af mine tabs.
//Brugerens bookede hoteller gemmes gennem useState, der opdaterer listen "bookedHotels", når brugeren trykker på "Book Hotel" knappen i HotelsScreen.
//BookingContext bruger også useEffect og AsyncStorage til at gemme brugerens "Order" side mellem hvert besøg.
//Det bruges her til HotelsScreen og OrderScreen.
export const BookingContext = createContext();

export const BookingProvider = ({ children }) => {
  const [bookedHotels, setBookedHotels] = useState([]);

  useEffect(() => {
    const loadBookings = async () => {
      try {
        const savedBookings = await AsyncStorage.getItem('bookedHotels')
        if (savedBookings) {
          setBookedHotels(JSON.parse(savedBookings));
        }
      } catch (error) {
        console.error("Error loading bookings:", error);
      }
    };
    loadBookings();
  }, []);

  useEffect(() => {
    const saveBookings = async () => {
      try {
        await AsyncStorage.setItem('bookedHotels', JSON.stringify(bookedHotels));
      } catch (error) {
        console.error("Error saving bookings:", error);
      }
    };

    if (bookedHotels.length > 0) {
      saveBookings();
    }
  }, [bookedHotels]);

  const addBooking = (hotel) => {
    const hotelExists = bookedHotels.find((bookedHotel) => bookedHotel.id === hotel.id);

    if(!hotelExists) {
      const updatedBookings = [...bookedHotels, hotel];
      setBookedHotels(updatedBookings);
    }
  };

  const clearBookings = async () => {
    try {
      await AsyncStorage.removeItem('bookedHotels');
      setBookedHotels([]);
    } catch (error) {
      console.error("Error clearing bookings:", error);
    }
  };

  return (
    <BookingContext.Provider value={{ bookedHotels, addBooking, clearBookings }}>
      {children}
    </BookingContext.Provider>
  );
};