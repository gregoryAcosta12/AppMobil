import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ContactMe = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contáctame</Text>
      <Image 
        source={require('../assets/image.png')} // Cambia esto según la ruta de tu ícono
        style={styles.icon}
      />
      <Text>Nombre: Gregory Acosta</Text>
      <Text>Email: costagregory@gmail.com</Text>
      <Text>Teléfono: 123 -456-7890</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 16,
  },
});

export default ContactMe;
