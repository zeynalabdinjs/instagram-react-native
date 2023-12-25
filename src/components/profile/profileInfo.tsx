import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Linking,
} from 'react-native';
import React from 'react';
import {profileImg2} from '@/shared/post/postData';
import Colors from '@/constants/Colors';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ProfileInfo = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headContainer}>
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

      <View style={styles.bodyContainer}>
        <Text style={styles.fullname}>Zeynalabdin Gadirov 🌟</Text>
        <Text style={styles.profession}>Developer</Text>
        <Text style={styles.description}>
          I like to read astronomical articles, watch movies and keep up with
          technological innovations.
        </Text>
        <View style={styles.urlContainer}>
          <View style={styles.urlIcon}>
            <Feather
              name="link-2"
              color={Colors.blue}
              size={18}
              onPress={() => Linking.openURL('https://zeynalabdin.vercel.com')}
            />
          </View>
          <Text
            onPress={() => Linking.openURL('https://zeynalabdin.vercel.com')}
            style={styles.url}>
            https://zeynalabdin.vercel.com
          </Text>
        </View>
      </View>

      <View style={styles.footerContainer}>
        <View style={styles.footerButtons}>
          <TouchableOpacity style={styles.followBtn}>
            <Text style={{color: '#fff', fontFamily: 'Poppins-Medium'}}>
              Follow
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.msgBtn}>
            <Text style={{color: Colors.black, fontFamily: 'Poppins-Medium'}}>
              Message
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.similars}>
            <Ionicons
              name="person-add-outline"
              size={20}
              color={Colors.black}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  /// header
  headContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  profileImg: {
    width: 90,
    height: 90,
    borderRadius: 100,
    marginRight: 20,
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: -5,
  },
  textValue: {
    fontFamily: 'Poppins-SemiBold',
    color: Colors.black,
    fontSize: 20,
  },
  textLabel: {
    fontFamily: 'Poppins-Regular',
    color: Colors.black,
    fontSize: 16,
  },
  // body
  bodyContainer: {},
  fullname: {
    fontFamily: 'Poppins-SemiBold',
    color: Colors.black,
    marginTop: 5,
    fontSize: 16,
  },
  profession: {
    marginTop: -5,
    fontSize: 16,
  },
  description: {
    fontSize: 16,
    color: '#000',
  },
  urlContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    position: 'relative',
    paddingVertical: 5,
    marginTop: -4,
  },
  url: {
    color: Colors.blue,
    position: 'relative',
    paddingLeft: 23,
    fontSize: 16,
  },
  urlIcon: {
    position: 'absolute',
    top: 15,
    paddingLeft: 4,
    transform: [{rotate: '-45deg'}],
    transformOrigin: '0deg',
  },

  // Footer
  footerContainer: {},
  footerButtons: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
    marginTop: 20,
    flex: 1,
  },
  followBtn: {
    backgroundColor: Colors.blue,
    flex: 1,
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    paddingVertical: 6,
    borderRadius: 8,
  },
  msgBtn: {
    flex: 1,
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    backgroundColor: '#eee',
    borderRadius: 8,
  },
  similars: {
    backgroundColor: '#eee',
    borderRadius: 8,
    width: '100%',
    maxWidth: 40,
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ProfileInfo;
