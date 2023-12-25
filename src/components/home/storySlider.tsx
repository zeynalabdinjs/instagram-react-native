import {
  View,
  Text,
  Dimensions,
  Image,
  StyleSheet,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import LinearGradient from 'react-native-linear-gradient';
import Colors from '@/constants/Colors';

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');
const img1 =
  'https://img.freepik.com/free-photo/confident-attractive-caucasian-guy-beige-pullon-smiling-broadly-while-standing-against-gray_176420-44508.jpg?w=1060&t=st=1703142547~exp=1703143147~hmac=45275d0dcb2e7b5f582809b03ed09f2fd64860bfb0af35203066743c4757991f';
const img =
  'https://images.ctfassets.net/lh3zuq09vnm2/1OO41kWzbKzcWVFrQF98F3/ca30793c490f74dcedae86347e04859c/Hotjar_reviews__what_120__real_user_reviews_say_about_Hotjar.jpg';
const StorySlider = () => {
  const [data, setData] = useState([
    {
      img,
      username: 'zeynalabdinjs',
    },
    {
      img,
      username: 'zeynalabdinjs',
    },
    {
      img,
      username: 'zeynalabdinjs',
    },
    {
      img,
      username: 'zeynalabdinjs',
    },
    {
      img,
      username: 'zeynalabdinjs',
    },
    {
      img,
      username: 'zeynalabdinjs',
    },
    {
      img,
      username: 'zeynalabdinjs',
    },
  ]);

  return (
    <View
      style={{
        paddingVertical: 15,
      }}>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        style={styles.scrollView}>
        <View style={styles.slide}>
          <View style={styles.imageBackground}>
            <Image source={{uri: img1}} style={styles.image} />
            <View style={styles.addStoryIcon}>
              <AntDesign name="pluscircle" size={20} color={'#0095f6'} />
            </View>
          </View>
          <Text style={styles.username}>Your story</Text>
        </View>
        {data.map((item, index) => (
          <View key={index} style={styles.slide}>
            <LinearGradient
              colors={['#CA1D7E', '#E35157', '#F2703F']}
              start={{x: 0.0, y: 1.0}}
              end={{x: 1.0, y: 1.0}}
              style={{
                height: 82,
                width: 82,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 82 / 2,
                padding: 5,
              }}>
              <View style={styles.imageBackground}>
                <Image source={{uri: item.img}} style={styles.image} />
              </View>
            </LinearGradient>
            <Text style={styles.username}>{item.username}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    width: screenWidth,
    height: 'auto',
  },
  slide: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 5,
    marginLeft: 5,
    height: 102,
  },
  image: {
    height: 70,
    aspectRatio: 1 / 1,
    resizeMode: 'cover',
    borderRadius: 50,
  },
  addStoryIcon: {
    backgroundColor: '#fff',
    borderRadius: 30,
    position: 'absolute',
    right: 3,
    bottom: 5,
    width: 25,
    height: 25,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageBackground: {
    backgroundColor: '#fff',
    padding: 3.5,
    borderRadius: 50,
  },
  username: {
    marginTop: 'auto',
    fontSize: 12,
    color: Colors.dark,
    fontFamily: "Manrope-Medium"
  },
});

export default StorySlider;
