import React from 'react';
import Colors from './src/constants/Colors';
import {Image, StyleSheet, View, useColorScheme} from 'react-native';
import {DiscoveryScreen, HomeScreen, ProfileScreen} from './src/screens';
import {
  Link,
  NavigationContainer,
  DefaultTheme,
} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import PostDetail from '@/screens/postDetail';

const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const RootNavigator = () => {
    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="TabNavigator" component={TabNavigator} />
        <Stack.Screen name="Detail" component={PostDetail} />
      </Stack.Navigator>
    );
  };
  const TabNavigator = () => (
    <Tab.Navigator
      initialRouteName="Home"
      sceneContainerStyle={{
        backgroundColor: 'white',
      }}
      screenOptions={{
        tabBarShowLabel: false,
        headerTitle: '',
        tabBarActiveTintColor: '#000',
        headerTintColor: '#000',
        headerLeft: () => (
          <Image
            source={require('./src/assets/images/instagram-text-icon.png')} // Update the path to your logo
            style={{width: 100, height: 30, marginLeft: 10}} // Customize logo width, height, and margins
            resizeMode="contain" // Adjust the resizeMode as per your requirement
          />
        ),
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Home',
          headerLeftLabelVisible: false,
          tabBarIcon: ({focused, color, size}) => {
            return <AntDesign name="home" size={size} color={color} />;
          },
          headerRight: ({tintColor, pressColor, pressOpacity}: any) => (
            <View style={styles.homeHeaderRight}>
              <Link to={'/likes'}>
                <Ionicons
                  name="heart-outline"
                  size={25}
                  color={tintColor}
                  style={{}}
                />
              </Link>
              <Link to={'/likes'}>
                <FontAwesome5
                  name="facebook-messenger"
                  size={25}
                  color={tintColor}
                />
              </Link>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Discovery"
        component={DiscoveryScreen}
        options={{
          title: 'Discovery',
          tabBarIcon: ({focused, color, size}) => {
            return <Feather name="search" size={size} color={color} />;
          },
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="new-post"
        component={HomeScreen}
        options={{
          title: 'New Post',
          tabBarIcon: ({focused, color, size}) => {
            return (
              <FontAwesome name="plus-square-o" size={size} color={color} />
            );
          },
        }}
      />
      <Tab.Screen
        name="reels"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused, color, size}) => {
            return (
              <MaterialIcons name="video-library" size={size} color={color} />
            );
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          title: 'Profile',
          tabBarIcon: ({focused, color, size}) => {
            return (
              <Ionicons
                name="person-circle-outline"
                size={size}
                color={color}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  homeHeaderRight: {
    display: 'flex',
    flexDirection: 'row',
    gap: 15,
    paddingHorizontal: 10,
  },
});

export default App;
