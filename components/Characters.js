import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ImageBackground, ScrollView } from 'react-native';

const charactersData = [
  {
    name: 'Scorpion',
    image: 'https://mx.web.img3.acsta.net/r_640_360/newsv7/20/04/16/19/05/1434357.jpg',
    details: 'Scorpion es un personaje ficticio de la franquicia de juegos de lucha Mortal Kombat de Midway Games y NetherRealm Studios. Es un ninja espectro, el cual se define principalmente por su búsqueda de vengar la muerte de él, su familia y su clan. ',
  },
  {
    name: 'Raiden',
    image: 'https://th.bing.com/th/id/OIP.ofKL0OOQMLbn9wEzNCmY0AHaE3?rs=1&pid=ImgDetMain',
    details: 'es un personaje de la saga de videojuegos de lucha Mortal Kombat. Haciendo su debut oficial como uno de los siete personajes jugables originales en Mortal Kombat en 1992, Raiden es uno de los personajes centrales de la franquicia. ',
  },
  {
    name: 'Sub zero',
    image: 'https://i.ytimg.com/vi/jvKXMFUxg7Y/maxresdefault.jpg',
    
    details: ' es un personaje ficticio de la franquicia de juegos de lucha Mortal Kombat de Midway Games y NetherRealm Studios. Guerrero del clan Lin Kuei, el personaje se define principalmente por su capacidad para controlar el hielo en muchas formas',
  },
];

const Characters = () => {
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [showDetails, setShowDetails] = useState(false); // Estado para controlar la visualización de detalles

  const handleCharacterPress = (character) => {
    setSelectedCharacter(character);
    setShowDetails(false); // Reinicia el estado de detalles al seleccionar un nuevo personaje
  };

  const handleViewDetails = () => {
    setShowDetails(true);
  };

  return (
    <ImageBackground
      source={{ uri: 'https://wallpaperaccess.com/full/329408.jpg' }} // Fondo de alta calidad
      style={styles.background}
      resizeMode="cover"
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.mainTitle}>Personajes</Text>
        <Text style={styles.mainTitle}>Toca los personajes para ver mejor la informacion de los personajes</Text>

        {selectedCharacter ? (
          <View style={[styles.selectedCharacterContainer, { backgroundColor: '#1C1C1C' }]}>
            {!showDetails ? (
              <>
                <TouchableOpacity onPress={handleViewDetails}>
                  <Text style={styles.viewDetailsText}>Ver información</Text>
                </TouchableOpacity>
                <Image source={{ uri: selectedCharacter.image }} style={styles.selectedImage} />
                <Text style={styles.selectedName}>{selectedCharacter.name}</Text>
              </>
            ) : (
              <>
                <TouchableOpacity onPress={() => setSelectedCharacter(null)}>
                  <Text style={styles.backButton}>Volver a la lista</Text>
                </TouchableOpacity>
                <Image source={{ uri: selectedCharacter.image }} style={styles.selectedImage} />
                <Text style={styles.selectedName}>{selectedCharacter.name}</Text>
                <Text style={styles.selectedDetails}>{selectedCharacter.details}</Text>
              </>
            )}
          </View>
        ) : (
          <View style={styles.charactersWrapper}>
            {charactersData.map((character, index) => (
              <TouchableOpacity 
                key={index} 
                style={styles.characterContainer} 
                onPress={() => handleCharacterPress(character)}
              >
                <Image source={{ uri: character.image }} style={styles.image} />
                <Text style={styles.name}>{character.name}</Text>
                <Text style={styles.details}>{character.details}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}
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
    flexGrow: 1,
    alignItems: 'center',
    padding: 16,
    paddingBottom: 30, // Asegura espacio adicional al final
  },
  mainTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFD700',
    marginBottom: 20,
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.7)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
  },
  charactersWrapper: {
    width: '100%',
  },
  characterContainer: {
    backgroundColor: '#1C1C1C',
    padding: 15,
    borderRadius: 8,
    marginBottom: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    borderColor: '#FFD700',
    borderWidth: 1,
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 2,
    borderColor: '#FFD700',
    marginBottom: 10, // Añadido para mejor separación
  },
  name: {
    marginTop: 8,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFD700',
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.7)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  details: {
    marginTop: 4,
    fontSize: 14,
    color: '#FFD700',
    textAlign: 'center',
    paddingHorizontal: 10,
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  selectedCharacterContainer: {
    alignItems: 'center',
    padding: 20,
    borderRadius: 8,
    marginBottom: 16,
  },
  backButton: {
    fontSize: 16,
    color: '#FFD700',
    marginBottom: 20,
    textDecorationLine: 'underline',
  },
  viewDetailsText: {
    fontSize: 16,
    color: '#FFD700',
    marginBottom: 20,
    textDecorationLine: 'underline',
    textAlign: 'center',
  },
  selectedImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth: 3,
    borderColor: '#FFD700',
    marginBottom: 20,
  },
  selectedName: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFD700',
    textAlign: 'center',
    marginBottom: 10,
  },
  selectedDetails: {
    fontSize: 16,
    color: '#FFD700',
    textAlign: 'center',
    paddingHorizontal: 20,
  },
});

export default Characters;
