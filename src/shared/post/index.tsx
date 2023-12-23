import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import {postType} from './postData';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Entypo from 'react-native-vector-icons/Entypo';
import Colors from '@/constants/Colors';

const Post = ({data}: {data: postType}) => {
  return (
    <View style={styles.post}>
      <View style={styles.postHeader}>
        <View style={styles.postHeaderElements}>
          <Image
            src={data.user.userImg}
            style={{
              width: 35,
              height: 35,
              borderRadius: 40,
            }}
          />
          <Text style={styles.username}>{data.user.username}</Text>
        </View>
        <View style={styles.postHeaderElements}>
          <Entypo name="dots-three-vertical" size={15} color={Colors.dark} />
        </View>
      </View>

      <View style={styles.postBody}>
        <Image src={data.image} style={styles.postImg} />
      </View>
      <View style={styles.postFooter}>
        <View style={styles.postFooterLeft}>
          <AntDesign name="hearto" size={23} color="#000" />
          <AntDesign name="message1" size={23} color="#000" />
          <FontAwesome5 name="telegram-plane" size={23} color="#000" />
        </View>
        <View style={styles.postFooterLeft}>
          <FontAwesome name="bookmark-o" size={23} color="#000" />
        </View>
      </View>
      <View style={styles.postInfo}>
        <Text style={{fontWeight: 'bold', color: '#000'}}>
          {data.more.like} likes
        </Text>
        <View>
          <Text
            style={{
              color: Colors.dark,
              marginTop: 5,
              fontFamily: 'Poppins-Regular',
            }}>
            <Text style={{fontWeight: 'bold', color: '#000'}}>
              {data.user.username}
            </Text>{' '}
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore,
            quisquam.{' '}
            <Text style={{color: Colors.blue}}>@{data.user.username}</Text>
          </Text>
        </View>
        <Text style={styles.dateText}>{data.date}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  post: {
    flex: 1,
    marginBottom: 10,
  },
  postHeader: {
    paddingHorizontal: 15,
    paddingVertical: 12,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  postHeaderElements: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 10,
  },
  username: {
    color: '#000',
    fontFamily: 'Poppins-Medium',
  },
  postBody: {
    width: '100%',
    height: '100%',
    maxHeight: 400,
  },
  postImg: {
    width: '100%',
    height: '100%',
  },
  postFooter: {
    padding: 10,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  postFooterLeft: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },
  postInfo: {
    display: 'flex',
    flexDirection: 'column',
    padding: 10,
    paddingTop: 5,
  },
  dateText: {
    fontSize: 12,
    marginTop: 10,
    fontFamily: 'Poppins-Regular',
  },
});
export default Post;
