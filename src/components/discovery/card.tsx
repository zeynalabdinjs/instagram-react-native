import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';

const img =
  'https://img.freepik.com/free-vector/modern-merry-christmas-background-with-modern-design_1361-2015.jpg?w=740&t=st=1703229817~exp=1703230417~hmac=c1c685f3f4fa52ca674a43db17942f600402468275513b4d3987ddb9d649cbbb';
const Card = () => {
  return (
    <View style={styles.card}>
      <Image
        source={{
          uri: img,
        }}
        style={styles.image}
      />
    </View>
  );
};

export const styles = StyleSheet.create({
  card: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover"
  }
});

export default Card;
