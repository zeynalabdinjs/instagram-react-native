import {View, Text, Button, Image, PermissionsAndroid} from 'react-native';
import React, {useState} from 'react';
import {
  launchCamera,
  launchImageLibrary,
  OptionsCommon,
} from 'react-native-image-picker';

const CameraScreen = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'App Camera Permission',
          message: 'App needs access to your camera ',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) return true;
      else return false;
    } catch (err) {
      console.warn(err);
      return false;
    }
  };
  const openImagePicker = () => {
    const options: OptionsCommon = {
      mediaType: 'photo',
      includeBase64: false,
      maxHeight: 2000,
      maxWidth: 2000,
    };

    launchImageLibrary(options, (response: any) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('Image picker error: ', response.error);
      } else {
        let imageUri = response.uri || response.assets?.[0]?.uri;
        setSelectedImage(imageUri);
      }
    });
  };

  const handleCameraLaunch = () => {
    const options: OptionsCommon = {
      mediaType: 'photo',
      includeBase64: false,
      maxHeight: 2000,
      maxWidth: 2000,
    };

    if (!requestCameraPermission()) return;
    launchCamera(options, (response: any) => {
      console.log('Response = ', response);
      if (response.didCancel) {
        console.log('User cancelled camera');
      } else if (response.error) {
        console.log('Camera Error: ', response.error);
      } else {
        // Process the captured image
        let imageUri = response.uri || response.assets?.[0]?.uri;
        setSelectedImage(imageUri);
        console.log(imageUri);
      }
    });
  };

  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      {selectedImage && (
        <Image
          source={{uri: selectedImage}}
          style={{flex: 1}}
          resizeMode="contain"
        />
      )}
      <View style={{marginTop: 20}}>
        <Button title="Choose from Device" onPress={openImagePicker} />
      </View>
      <View style={{marginTop: 20, marginBottom: 50}}>
        <Button title="Open Camera" onPress={handleCameraLaunch} />
      </View>
    </View>
  );
};

export default CameraScreen;
