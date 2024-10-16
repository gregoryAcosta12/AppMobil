import React from 'react';
import { View, Text, StyleSheet, Video } from 'react-native';

const InMyLife = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>En mi vida</Text>
      <Text>Esta serie es importante para mí porque me gusta mortal kombat</Text>
      
    
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

});

export default InMyLife;
