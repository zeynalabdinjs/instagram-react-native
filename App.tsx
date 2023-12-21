import React from 'react';
import Colors from './src/constants/Colors';
import {Image, useColorScheme} from 'react-native';
import {HomeScreen, ProfileScreen} from './src/screens';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Tab = createBottomTabNavigator();

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.dark : Colors.light,
  };

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          tabBarShowLabel: false,
          headerLeftLabelVisible: false
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
            headerLeft: () => (
              <Image
                source={require('./src/assets/images/instagram-text-icon.png')} // Update the path to your logo
                style={{width: 100, height: 30, marginLeft: 10}} // Customize logo width, height, and margins
                resizeMode="contain" // Adjust the resizeMode as per your requirement
              />
            ),
          }}
        />
        <Tab.Screen
          name="Discovery"
          component={HomeScreen}
          options={{
            title: 'Discovery',
            tabBarIcon: ({focused, color, size}) => {
              return <Feather name="search" size={size} color={color} />;
            },
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
    </NavigationContainer>
  );
}

export default App;
