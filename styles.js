import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  titleText: {
    fontWeight: "bold",
    fontSize: 22,
  },
  flatListContainer: {
    marginVertical: 10,
    marginHorizontal: 16,
    paddingBottom: 32,
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
  },
  seperator: {
    height: 2,
    backgroundColor: "#e1e2e6",
  },
  bookHotelButton: {
    marginTop: 30,
    paddingVertical: 12,
    paddingHorizontal: 105,
    borderRadius: 12,
    backgroundColor: '#4998f5',
  },
  bookHotelButtonText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
    textAlign: 'center',
  },
  clearOrderButton: {
    backgroundColor: '#FF6347',
    padding: 10,
    marginTop: 20,
    borderRadius: 5,
    alignItems: 'center',
  },
  clearOrderText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  hotelImage: {
    height: 150,
    width: 300,
    marginTop: 20,
  },
  mapText: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 20,
    textAlign: 'center',
  },
  bookingsImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;