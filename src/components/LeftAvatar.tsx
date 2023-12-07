import React, { useState, useEffect } from "react";
import { Avatar } from "react-native-paper";
import { Amplify } from "aws-amplify";
import  Storage from "aws-amplify";
import amplifyconfig from "../amplifyconfiguration.json";
//import awsconfig from "./src/aws-exports";
Amplify.configure({
  ...amplifyconfig,
  Storage: {
    S3: {
      bucket: amplifyconfig.aws_user_files_s3_bucket,
      region: amplifyconfig.aws_user_files_s3_bucket_region,
    },
  },
});


const LeftAvatar = (props) => {
  const [imageUri, setImageUri] = useState(null);
  const avatarSize = 50; // set the avatar size

  useEffect(() => {
    async function fetchImage() {
      try {
        const url = await Storage.get("dilesh.jpg", { level: "private" }); // Replace 'image-key.jpg' with your image key
        setImageUri(url);
      } catch (err) {
        console.log('error fetching image',err);
      }
    }

    fetchImage();
  }, []);

  // If imageUri is not yet loaded, you can return null or a placeholder
  if (!imageUri) return null;

  return (
    <Avatar.Image
      size={avatarSize}
      source={{ uri: imageUri }} // Use the image URI from state
    />
  );
};

export default LeftAvatar;
