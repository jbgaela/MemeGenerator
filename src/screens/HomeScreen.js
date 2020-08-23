import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';
import axios from 'axios';

const HomeScreen = () => {
  const [result, setResult] = useState([]);

  const searchMeme = async () => {
    try {
      const response = await axios.get(
        'https://meme-api.herokuapp.com/gimme/dankmemes'
      );
      setResult(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    searchMeme();
  }, []);

  return (
    <View>
      <Image
        style={styles.ImageStyle}
        resizeMode="stretch"
        source={{ uri: result.url }}
      />
      <Button
        style={styles.ButtonStyle}
        title="Get memes"
        onPress={searchMeme}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  ButtonStyle: {
    paddingTop: 20,
    backgroundColor: '#FF3D00',
    borderRadius: 5,
    height: '10%',
    width: '10%',
  },
  ImageStyle: {
    margin: 5,
    height: 600,
    width: 400,
  },
});

export default HomeScreen;
