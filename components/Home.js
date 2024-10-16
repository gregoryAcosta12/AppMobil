import React, { useState, useCallback } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, ScrollView, Dimensions } from 'react-native';
import YoutubeIframe from 'react-native-youtube-iframe';
import Icon from 'react-native-vector-icons/FontAwesome'; // Asegúrate de importar FontAwesome

const { height } = Dimensions.get('window');

const Home = ({ navigation }) => {
  const [playing, setPlaying] = useState(false);

  const onStateChange = useCallback((state) => {
    if (state === 'ended') {
      setPlaying(false);
    }
  }, []);

  return (
    <ImageBackground
      source={{ uri: 'https://wallpaperaccess.com/full/329408.jpg' }} // Fondo de alta calidad
      style={styles.background}
      resizeMode="cover"
    >
      <ScrollView contentContainerStyle={styles.container}>
        {/* Título principal */}
        <Text style={styles.mainTitle}>Introd de Mortal Kombat: La Venganza de Scorpion</Text>

        {/* Contenedor del video */}
        <View style={styles.videoContainer}>
          <YoutubeIframe
            height={height * 0.35} // Ajustar la altura del video a un 35% de la altura de la pantalla
            width="100%"
            play={playing}
            videoId={'rvxaNReIZ5M'}
            onChangeState={onStateChange}
          />
        </View>

        {/* Botones de navegación con íconos */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Characters')}>
            <Icon name="users" size={20} color="#FFD700" />
            <Text style={styles.buttonText}>Personajes</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Moments')}>
            <Icon name="clock-o" size={20} color="#FFD700" />
            <Text style={styles.buttonText}>Momentos</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('About')}>
            <Icon name="info-circle" size={20} color="#FFD700" />
            <Text style={styles.buttonText}>Acerca de</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('InMyLife')}>
            <Icon name="life-ring" size={20} color="#FFD700" />
            <Text style={styles.buttonText}>En mi vida</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ContactMe')}>
            <Icon name="envelope" size={20} color="#FFD700" />
            <Text style={styles.buttonText}>Contrátame</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
  },
  container: {
    flexGrow: 1, // Permite que el ScrollView expanda el contenido
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 16,
  },
  mainTitle: {
    fontSize: 24, // Reducir un poco el tamaño para que se ajuste mejor en pantallas pequeñas
    fontWeight: 'bold',
    color: '#FFD700',
    marginBottom: 20,
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.7)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
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

export default Home;
