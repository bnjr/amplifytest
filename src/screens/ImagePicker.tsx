import React, { useState, useEffect } from 'react'
import { Image, View, Platform, Linking } from 'react-native'
import { Button, Text } from 'react-native-paper'

import * as ImagePicker from 'expo-image-picker'
import { buttonStyles } from '../styles/buttonStyles'
import { textStyles } from '../styles/textStyles'

// import Amplify from 'aws-amplify'
// import awsconfig from '../src/aws-exports' // Replace with your AWS Amplify configuration file
//Amplify.configure(awsconfig);

import { list, uploadData, getUrl, remove } from 'aws-amplify/storage'
import Storage from 'aws-amplify'

export default function ImagePickerExample() {
  const [image, setImage] = useState(null)
  const [awsImage, setAwsImage] = useState(null)

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    })

    console.log(result)

    if (!result.canceled) {
      setImage(result.assets[0].uri)
      console.log('image set')
    }
  }

  // const uploadImageToStorage = async () => {
  //   const imageUri = image // Assuming 'image' contains the URI of the picked image
  //   const filename = 'myImage.jpg' // Replace with the desired filename

  //   try {
  //     const result = await Storage.put(filename, imageUri, {
  //       contentType: 'image/jpeg', // Specify the content type of the image
  //       level: 'public', // Set the access level (public, protected, private) as needed
  //     })

  //     console.log('Upload successful:', result)
  //   } catch (error) {
  //     console.error('Error uploading image:', error)
  //   }
  // }

  const fetchImageFromUri = async (uri) => {
    console.log("URI: ", uri)
    const response = await fetch(uri);
    const blob = await response.blob();
    return blob;
  };

  const getUrlResult = async () => {
    try {
      const a = await getUrl({
        key: 'dilesh.jpg',
      })
      //console.log("result:", result);
      console.log('signed URL: ', a.url.toString())
      console.log('URL expires at: ', a.expiresAt)
      setAwsImage(a)
    } catch (error) {
      console.error('Error uploading image:', error)
    }
  }

  const testLog = async () => {
    console.log(awsImage.url.toString())
  }

  const listAWSimages = async () => {
    try {
      const result = await list({
        prefix: '',
      })
      console.log('image list->', result)
    } catch (error) {
      console.log(error)
    }
  }

  const listAWSimages2 = async () => {
    try {
      const response = await list({
        prefix: 'public/',
        options: {
          listAll: true,
        },
      })
      // render list items from response.items
      console.log('image list->', response)
    } catch (error) {
      console.log('Error ', error)
    }
  }

  const MyComponent = () => {
    const openGoogleLink = () => {
      Linking.openURL(awsImage)
    }
  }

  const uploadImages = async () => {
    console.log("Image: ", image)
    const img = await fetchImageFromUri(image);
    const filename = 'aryaman.jpg' // Replace with the desired filename

    try {
      const result = await uploadData({
        key: filename,
        data: img,
        options: {
          accessLevel: 'guest', // defaults to `guest` but can be 'private' | 'protected' | 'guest'
          // onProgress, // Optional progress callback.
        },
      }).result
      console.log('Succeeded: ', result)
    } catch (error) {
      console.error('Error : ', error)
    }
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={pickImage} mode='elevated' style={buttonStyles.button}>
        <Text style={textStyles.buttonText}>Pick an image</Text>
      </Button>
      {image && (
        <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
      )}

      <Button
        onPress={uploadImages}
        mode='elevated'
        style={buttonStyles.button}
      >
        <Text style={textStyles.buttonText}>Upload image</Text>
      </Button>

      <Button
        onPress={getUrlResult}
        mode='elevated'
        style={buttonStyles.button}
      >
        <Text style={textStyles.buttonText}>Get Download URL</Text>
      </Button>
      {awsImage ? (
        <Image
          source={{ uri: awsImage.url.toString() }}
          style={{ width: 200, height: 200 }}
        />
      ) : (
        <Text>Error loading image</Text>
      )}

      <Button onPress={MyComponent} mode='elevated' style={buttonStyles.button}>
        <Text style={textStyles.buttonText}>List Files</Text>
      </Button>
    </View>
  )
}
