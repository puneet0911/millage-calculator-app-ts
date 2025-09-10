import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function LoginScreen({ navigation }: any) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = async () => {
    // ... login logic here
    setMessage('Login logic to be implemented');
    navigation.navigate('AddVehicle');
  };

  return (
    <View style={styles.background}>
      <View style={styles.card}>
        <Text style={styles.headline}>Welcome Back 👋</Text>
        <Text style={styles.subtext}>Login to your account</Text>
        {/* Placeholder for an icon or logo */}
        <View style={styles.iconCircle}>
          <Text style={{ fontSize: 40 }}>🚗</Text>
        </View>

        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Email address"
          placeholderTextColor="#aaa"
          value={email}
          onChangeText={setEmail}
        />

        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#aaa"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>
        {!!message && <Text style={styles.message}>{message}</Text>}

        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text style={styles.linkText}>Don't have an account? Register</Text>
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
    fontSize: 28,
    fontWeight: 'bold',
    color: '#111',
    marginBottom: 2,
  },
  subtext: {
    color: '#888',
    fontSize: 15,
    marginBottom: 15,
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
    color: '#ff3a3a',
    marginTop: 10,
  },
});
