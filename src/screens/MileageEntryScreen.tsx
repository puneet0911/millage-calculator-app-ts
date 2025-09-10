import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function MileageEntryScreen({ navigation }: any) {
  const [vehicleId, setVehicleId] = useState('');
  const [km, setKm] = useState('');
  const [fuel, setFuel] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async () => {
    // ... API logic
    setMessage('Mileage logged! (Logic to be connected)');
    setKm('');
    setFuel('');
    setVehicleId('');
  };

  return (
    <View style={styles.background}>
      <View style={styles.card}>
        <Text style={styles.headline}>Log Mileage ⛽</Text>
        <Text style={styles.subtext}>Record every fill and distance for insights</Text>

        <View style={styles.iconCircle}>
          <Text style={{ fontSize: 40 }}>⛽</Text>
        </View>

        <Text style={styles.label}>Vehicle ID</Text>
        <TextInput
          style={styles.input}
          placeholder="Type your vehicle ID"
          placeholderTextColor="#aaa"
          value={vehicleId}
          onChangeText={setVehicleId}
        />

        <Text style={styles.label}>Kilometers Driven</Text>
        <TextInput
          style={styles.input}
          placeholder="E.g. 200"
          placeholderTextColor="#aaa"
          value={km}
          onChangeText={setKm}
          keyboardType="numeric"
        />

        <Text style={styles.label}>Fuel Filled (Ltrs)</Text>
        <TextInput
          style={styles.input}
          placeholder="E.g. 40"
          placeholderTextColor="#aaa"
          value={fuel}
          onChangeText={setFuel}
          keyboardType="numeric"
        />

        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Add Entry</Text>
        </TouchableOpacity>
        {!!message && <Text style={styles.message}>{message}</Text>}
         <TouchableOpacity onPress={() => navigation.navigate('AddVehicle')}>
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
