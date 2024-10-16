import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const About = () => {
  return (
    <View style={styles.background}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.mainTitle}>Acerca de la película</Text>
        <Text style={styles.detailText}>Creador: Ethan Spaulding</Text>
        <Text style={styles.detailText}>Temporadas: 1 (Película)</Text>
        <Text style={styles.detailText}>
          Descripción: "Mortal Kombat: Legends - Scorpion's Revenge" es una película de animación que narra la historia de Scorpion, un guerrero que busca vengar la muerte de su familia mientras se enfrenta a otros luchadores en el torneo Mortal Kombat. La película presenta una mezcla de acción intensa, batallas épicas y un enfoque en la rica historia de los personajes.
        </Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#121212', // Fondo oscuro
  },
  container: {
    flexGrow: 1, // Permite que el ScrollView expanda el contenido
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 16,
  },
  mainTitle: {
    fontSize: 24, // Título principal
    fontWeight: 'bold',
    color: '#FFD700',
    marginBottom: 20,
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.7)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
  },
  detailText: {
    color: '#FFFFFF', // Texto blanco
    fontSize: 16,
    marginVertical: 5,
    textAlign: 'center',
  },
  videoContainer: {
    width: '100%',
    marginBottom: 30,
    borderRadius: 10,
    overflow: 'hidden', // Para asegurar que el video mantenga el borde redondeado
    elevation: 5, // Sombra en Android
    shadowColor: '#000', // Sombra en iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  buttonContainer: {
    width: '100%',
  },
  button: {
    backgroundColor: '#1C1C1C',
    padding: 15,
    borderRadius: 8,
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFD700',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10, // Espacio entre el icono y el texto
  },
});

export default About;
