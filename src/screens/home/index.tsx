import {ScrollView, StyleSheet, View} from 'react-native';
import React from 'react';
import {StorySlider} from '../../components';
import {postType, posts} from '../../shared/post/postData';
import {Post} from '../../shared';

const HomeScreen = ({navigation}: any) => {
  return (
    <ScrollView>
      <StorySlider />
      <View style={styles.borderLine}></View>
      <View style={styles.container}>
        {posts.map((data: postType, i) => (
          <Post key={i} data={data} />
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  borderLine: {
    borderBottomWidth: 0.5,
    borderBottomColor: '#eee',
  },
  container: {
    paddingBottom: 10,
  },
});

export default HomeScreen;
