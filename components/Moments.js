import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, Dimensions } from 'react-native';
import YoutubeIframe from 'react-native-youtube-iframe';

const { height } = Dimensions.get('window');

const momentsData = [
  {
    title: 'Scorpion vs Sub zero',
    image: 'https://m.media-amazon.com/images/M/MV5BNTYxNzYyMTItMmM3MC00NDkwLTg0MDMtZGYyYjdiOTg0NjZjXkEyXkFqcGdeQXVyNzk3NDUzNTc@._V1_.jpg',
    details: 'Este momento es increíble porque es la batalla de Sub zero y Scorpion',
    videoId: 'touWONxw9Jo' // ID del video de YouTube
  },
  {
    title: 'Raiden Aparece',
    image: 'https://sm.ign.com/ign_es/gallery/m/mortal-kom/mortal-kombat-legends-scorpions-revenge_xfac.jpg',
    details: 'En este momento es épico porque aparece el Dios del trueno.',
    videoId: 'KSxnBTMHlBE' // ID del video de YouTube
  },
  {
    title: 'La muerte de la familia de Scorpion',
    image: 'https://i.ytimg.com/vi/MKNnv7owjdE/maxresdefault.jpg',
    details: 'Este es un momento de los mejores porque te da la razón de por qué Scorpion se vuelve lo que es.',
    videoId: '98lEWoboWuw' // ID del video de YouTube
  },
];

const Moments = () => {
  const [selectedMoment, setSelectedMoment] = useState(null);

  const handleSelectMoment = (moment) => {
    setSelectedMoment(moment);
  };

  return (
    <View style={styles.background}>
      <Text style={styles.mainTitle}>Mis Momentos Favoritos</Text>
      <ScrollView contentContainerStyle={styles.container}>
        {momentsData.map((moment, index) => (
          <TouchableOpacity key={index} style={styles.momentCard} onPress={() => handleSelectMoment(moment)}>
            <Image source={{ uri: moment.image }} style={styles.momentImage} />
            <Text style={styles.momentTitle}>{moment.title}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      {selectedMoment && (
        <View style={styles.detailsContainer}>
          <Text style={styles.detailsTitle}>{selectedMoment.title}</Text>
          <Text style={styles.detailsText}>{selectedMoment.details}</Text>
          <View style={styles.videoContainer}>
            <YoutubeIframe
              height={height * 0.35}
              width="100%"
              videoId={selectedMoment.videoId}
            />
          </View>
          <TouchableOpacity style={styles.closeButton} onPress={() => setSelectedMoment(null)}>
            <Text style={styles.closeButtonText}>Cerrar</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#f8f9fa',
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
  momentCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 20,
    overflow: 'hidden',
    elevation: 3, // Sombra para Android
    shadowColor: '#000', // Sombra para iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    width: '100%',
  },
  momentImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  momentTitle: {
    padding: 10,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  detailsContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  detailsTitle: {
    fontSize: 24,
    color: '#FFD700',
    marginBottom: 10,
  },
  detailsText: {
    color: '#fff',
    marginBottom: 20,
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
  closeButton: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
  },
  closeButtonText: {
    color: '#fff',
  },
});

export default Moments;
