import {View, Text, ScrollView, StyleSheet} from 'react-native';
import React from 'react';
import {ProfileInfo} from '@/components';

const ProfileScreen = ({navigation, route}: any) => {
  return (
    <ScrollView style={styles.container}>
      <ProfileInfo />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20
  }
});

export default ProfileScreen;
