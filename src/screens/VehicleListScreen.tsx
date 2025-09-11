import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Alert } from 'react-native';
// import { api } from '../api'; // Uncomment and use your actual api logic

interface Vehicle {
  _id: string;
  name: string;
  type: string;
  fuelType: string;
}

export default function VehicleListScreen({ navigation }: any) {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);

  useEffect(() => {
    // Replace with actual API call
    // api.get('/vehicles').then(res => setVehicles(res.data));
    setVehicles([
      { _id: '1', name: 'Civic', type: 'Sedan', fuelType: 'petrol' },
      { _id: '2', name: 'Model S', type: 'Sedan', fuelType: 'electric' },
    ]);
  }, []);

  const handleDelete = (id: string) => {
    Alert.alert('Delete Vehicle', 'Are you sure you want to delete this vehicle?', [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'Delete',
        style: 'destructive',
        onPress: () => {
          // api.delete(`/vehicles/${id}`).then(() => setVehicles(vehicles.filter(v => v._id !== id)));
          setVehicles(vehicles.filter(v => v._id !== id)); // Placeholder
        },
      },
    ]);
  };

  const renderItem = ({ item }: { item: Vehicle }) => (
    <View style={styles.card}>
      <Text style={styles.headline}>{item.name} <Text style={{ fontSize: 20 }}>{item.type === 'Sedan' ? '🚗' : '🛻'}</Text></Text>
      <Text style={styles.info}>Type: {item.type}</Text>
      <Text style={styles.info}>Fuel: {item.fuelType}</Text>
      <View style={{ flexDirection: 'row', marginTop: 10, justifyContent: 'flex-end' }}>
        <TouchableOpacity 
          style={styles.editButton}
          onPress={() => navigation.navigate('EditVehicle', { vehicle: item })}
        >
          <Text style={styles.editButtonText}>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.deleteButton}
          onPress={() => handleDelete(item._id)}
        >
          <Text style={styles.deleteButtonText}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.background}>
      <Text style={styles.title}>Your Vehicles</Text>
      <FlatList
        data={vehicles}
        keyExtractor={item => item._id}
        renderItem={renderItem}
        contentContainerStyle={{ padding: 16 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#23b6e6',
    paddingTop: 28,
  },
  title: {
    color: '#fff',
    fontSize: 26,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginBottom: 6,
  },
  card: {
    backgroundColor: '#fff',
    marginBottom: 18,
    borderRadius: 16,
    padding: 18,
    shadowColor: '#111',
    shadowOpacity: 0.12,
    shadowRadius: 6,
    elevation: 7,
  },
  headline: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#111',
  },
  info: {
    color: '#666',
    fontSize: 15,
    marginTop: 2,
  },
  editButton: {
    backgroundColor: '#23b6e6',
    padding: 8,
    borderRadius: 6,
    marginRight: 10,
  },
  deleteButton: {
    backgroundColor: '#ff5656',
    padding: 8,
    borderRadius: 6,
  },
  editButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  deleteButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
