import {
  View,
  Button,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
  Alert,
  Modal,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import uuid from 'react-native-uuid';
import Colors from '../../constants/Colors';

interface todoType {
  id: string | number[];
  content: string;
  isCompleted: boolean;
}
const HomeScreen = ({navigation}: any) => {
  return <View>
    <Text>Instagram home</Text>
  </View>;
};

export default HomeScreen;
