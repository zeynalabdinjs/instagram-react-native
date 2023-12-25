import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import {profileImg2} from '@/shared/post/postData';
import Colors from '@/constants/Colors';

const ProfileInfo = () => {
  return (
    <View style={styles.container}>
      <Image src={profileImg2} style={styles.profileImg} />
      <View style={styles.textContainer}>
        <Text style={styles.textValue}>202</Text>
        <Text style={styles.textLabel}>Posts</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.textValue}>281K</Text>
        <Text style={styles.textLabel}>Followers</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.textValue}>817</Text>
        <Text style={styles.textLabel}>Following</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  profileImg: {
    width: 90,
    height: 90,
    borderRadius: 100,
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: -5
  },
  textValue: {
    fontFamily: 'Poppins-SemiBold',
    color: Colors.dark,
    fontSize: 22,
  },
  textLabel: {
    fontFamily: 'Poppins-Regular',
    color: Colors.dark,
    fontSize: 16,
  },
});

export default ProfileInfo;
