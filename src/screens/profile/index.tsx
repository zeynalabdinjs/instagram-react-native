import {View, Text, ScrollView, StyleSheet} from 'react-native';
import React from 'react';
import {ProfileDetailPosts, ProfileInfo} from '@/components';

const ProfileScreen = ({navigation, route}: any) => {
  return (
    <ScrollView>
      <ProfileInfo />
      <ProfileDetailPosts />
    </ScrollView>
  );
};

export default ProfileScreen;
