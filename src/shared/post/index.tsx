import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import {postType} from './postData';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Post = ({data}: {data: postType}) => {
  return (
    <View>
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
        <View style={styles.postHeaderElements}></View>
      </View>

      <View style={styles.postBody}>
        <Image src={data.image} style={styles.postImg} />
      </View>
      <View style={styles.postFooter}>
        <View style={styles.postFooterLeft}>
          <AntDesign name="hearto" size={23} color="#000" />
          <FontAwesome name="comment-o" size={25} color="#000" />
          <FontAwesome5 name="telegram-plane" size={25} color="#000" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  postHeader: {
    paddingHorizontal: 20,
    paddingVertical: 10,
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
    fontWeight: '500',
    color: '#000',
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
  },
  postFooterLeft: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },
});
export default Post;
