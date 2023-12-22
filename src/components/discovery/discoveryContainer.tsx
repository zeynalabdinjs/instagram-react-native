import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {Card} from '..';
import {useNavigation} from '@react-navigation/native';

const numColumns = 3;
const deviceWidth = Dimensions.get('window').width;
const itemWidth = deviceWidth / numColumns - 1.5;

const styles = StyleSheet.create({
  container: {
    // paddingHorizontal: 10,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: (deviceWidth - numColumns * itemWidth) / (numColumns - 1),
  },
  item: {
    display: 'flex',
    justifyContent: 'center',
    width: itemWidth,
    aspectRatio: 1 / 1,
  },
});

const DiscoveryContainer = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      {Array.from(Array(100), (_, index) => index).map((i: number) => (
        <TouchableOpacity
          style={styles.item}
          key={i}
          onPress={() => navigation.navigate('Detail', {id: i})}>
          <Card />
        </TouchableOpacity>
      ))}
    </SafeAreaView>
  );
};

export default DiscoveryContainer;
