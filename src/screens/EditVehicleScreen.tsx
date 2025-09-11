import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function EditVehicleScreen({ route, navigation }: any) {
  const { vehicle } = route.params;
  const [name, setName] = useState(vehicle.name);
  const [type, setType] = useState(vehicle.type);
  const [fuelType, setFuelType] = useState(vehicle.fuelType);
  const [message, setMessage] = useState('');

  const handleUpdate = async () => {
    // await api.put(`/vehicles/${vehicle._id}`, { name, type, fuelType });
    setMessage('Vehicle updated! (Logic to be connected)');
  };

  return (
    <View style={styles.background}>
      <View style={styles.card}>
        <Text style={styles.headline}>Edit Vehicle 🛠️</Text>
        <View style={styles.iconCircle}><Text style={{ fontSize: 38 }}>✏️</Text></View>
        <Text style={styles.label}>Vehicle Name</Text>
        <TextInput style={styles.input} value={name} onChangeText={setName} />
        <Text style={styles.label}>Type</Text>
        <TextInput style={styles.input} value={type} onChangeText={setType} />
        <Text style={styles.label}>Fuel Type</Text>
        <View style={styles.pickerWrapper}>
          <Picker
            selectedValue={fuelType}
            onValueChange={setFuelType}
            style={styles.picker}
            dropdownIconColor="#23b6e6"
          >
            <Picker.Item label="Petrol" value="petrol" />
            <Picker.Item label="Diesel" value="diesel" />
            <Picker.Item label="Electric" value="electric" />
          </Picker>
        </View>
        <TouchableOpacity style={styles.button} onPress={handleUpdate}>
          <Text style={styles.buttonText}>Update Vehicle</Text>
        </TouchableOpacity>
        {!!message && <Text style={styles.message}>{message}</Text>}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  background: { flex: 1, backgroundColor: '#23b6e6', justifyContent: 'center', alignItems: 'center' },
  card: {
    width: '88%',
    backgroundColor: '#fff',
    padding: 28,
    borderRadius: 18,
    elevation: 8,
    alignItems: 'center',
  },
  iconCircle: {
    backgroundColor: '#23b6e6',
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 12,
  },
  headline: { fontSize: 24, fontWeight: 'bold', marginBottom: 6, color: '#222' },
  label: { alignSelf: 'flex-start', color: '#666', marginTop: 12, marginBottom: 3, fontWeight: '500' },
  input: {
    width: '100%',
    padding: 12,
    borderRadius: 8,
    backgroundColor: '#f2f2f2',
    marginBottom: 5,
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
  picker: { height: 50, color: '#222' },
  button: {
    backgroundColor: '#23b6e6',
    borderRadius: 8,
    paddingVertical: 13,
    alignItems: 'center',
    width: '100%',
    marginTop: 16,
    marginBottom: 7,
    elevation: 2,
  },
  buttonText: { color: '#fff', fontSize: 17, fontWeight: 'bold' },
  message: { color: '#2e8b57', marginTop: 11 },
});
