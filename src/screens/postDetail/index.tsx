import {SafeAreaView, StyleSheet, View} from 'react-native';
import React from 'react';
import {Post} from '@/shared';
import {posts} from '@/shared/post/postData';

const PostDetail = ({route}: any) => {
  return (
    <SafeAreaView style={styles.container}>
      <Post data={posts[1]} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

export default PostDetail;
