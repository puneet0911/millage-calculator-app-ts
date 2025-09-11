import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function AddVehicleScreen({navigation}:any) {
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [fuelType, setFuelType] = useState('petrol');
  const [message, setMessage] = useState('');

  const handleAdd = async () => {
    // ... API logic placeholder
    navigation.navigate('VehicleList');
    setMessage('Vehicle added! (Logic to be connected)');
    setName('');
    setType('');
    setFuelType('petrol');
  };

  return (
    <View style={styles.background}>
      <View style={styles.card}>
        <Text style={styles.headline}>Add Vehicle 🚘</Text>
        <Text style={styles.subtext}>Save your vehicles for quick fuel logging</Text>

        <View style={styles.iconCircle}>
          <Text style={{ fontSize: 40 }}>🚗</Text>
        </View>

        <Text style={styles.label}>Vehicle Name</Text>
        <TextInput
          style={styles.input}
          placeholder="E.g. Swift, Civic, Model S"
          placeholderTextColor="#aaa"
          value={name}
          onChangeText={setName}
        />

        <Text style={styles.label}>Type</Text>
        <TextInput
          style={styles.input}
          placeholder="Sedan/SUV/Bike"
          placeholderTextColor="#aaa"
          value={type}
          onChangeText={setType}
        />

        <Text style={styles.label}>Fuel Type</Text>
        <View style={styles.pickerWrapper}>
          <Picker
            selectedValue={fuelType}
            onValueChange={(itemValue) => setFuelType(itemValue)}
            style={styles.picker}
            dropdownIconColor="#23b6e6"
          >
            <Picker.Item label="Petrol" value="petrol" />
            <Picker.Item label="Diesel" value="diesel" />
            <Picker.Item label="Electric" value="electric" />
          </Picker>
        </View>

        <TouchableOpacity style={styles.button} onPress={handleAdd}>
          <Text style={styles.buttonText}>Add Vehicle</Text>
        </TouchableOpacity>
        {!!message && <Text style={styles.message}>{message}</Text>}
        <TouchableOpacity onPress={() => navigation.navigate('AddMileage')}>
          <Text style={styles.linkText}>Already having Vehicle? Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#23b6e6',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: '88%',
    backgroundColor: '#fff',
    padding: 28,
    borderRadius: 18,
    elevation: 8,
    shadowColor: '#222',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.18,
    shadowRadius: 8,
    alignItems: 'center',
  },
  iconCircle: {
    backgroundColor: '#23b6e6',
    width: 70,
    height: 70,
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 18,
  },
  headline: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#111',
    marginBottom: 2,
  },
  subtext: {
    color: '#888',
    fontSize: 15,
    marginBottom: 15,
    textAlign: 'center',
  },
  label: {
    alignSelf: 'flex-start',
    color: '#666',
    marginTop: 9,
    marginBottom: 3,
    fontWeight: '500',
  },
  input: {
    width: '100%',
    padding: 12,
    borderRadius: 8,
    backgroundColor: '#f2f2f2',
    marginBottom: 8,
    color: '#222',
    fontSize: 16,
  },
  pickerWrapper: {
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    overflow: 'hidden',
    marginBottom: 12,
    width: '100%',
  },
  picker: {
    height: 50,
    color: '#222',
  },
  button: {
    backgroundColor: '#23b6e6',
    borderRadius: 8,
    paddingVertical: 13,
    alignItems: 'center',
    width: '100%',
    marginTop: 18,
    marginBottom: 7,
    elevation: 2,
  },
  buttonText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: 'bold',
    letterSpacing: 0.2,
  },
  linkText: {
    color: '#23b6e6',
    marginTop: 10,
    fontWeight: '600',
  },
  message: {
    color: '#2e8b57',
    marginTop: 14,
  },
});
