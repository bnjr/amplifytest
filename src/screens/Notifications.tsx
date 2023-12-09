import React from "react";
import { View, Text, SafeAreaView, ScrollView } from "react-native";
import { Avatar, Card, Button, Searchbar } from "react-native-paper";
import { containerStyles } from "../styles/containerStyles";
import { avatarSize, imageSize } from "../styles/imageStyles";
import { textStyles } from "../styles/textStyles";

const notifications = [
  {
    senderImage: "image1",
    notification:
      "You have a new message from Alice! You have a new message from Alice! You have a new message from Alice!",
  },
  {
    senderImage: "image2",
    notification: "Bob liked your photo.",
  },
  {
    senderImage: "image3",
    notification: "Clara commented on your post.",
  },
  {
    senderImage: "image1",
    notification: "You have a new message from Alice!",
  },
  {
    senderImage: "image2",
    notification: "Bob liked your photo.",
  },
  {
    senderImage: "image3",
    notification: "Clara commented on your post.",
  },
  {
    senderImage: "image1",
    notification: "You have a new message from Alice!",
  },
  {
    senderImage: "image2",
    notification: "Bob liked your photo.",
  },
  {
    senderImage: "image3",
    notification: "Clara commented on your post.",
  },
  {
    senderImage: "image3",
    notification: "Clara commented on your post.",
  },
  {
    senderImage: "image3",
    notification: "Clara commented on your post.",
  },
  {
    senderImage: "image3",
    notification: "Clara commented on your post.",
  },
];

const localImages = {
  image1: require("../assets/images/shruti.jpg"),
  image2: require("../assets/images/shruti.jpg"),
  image3: require("../assets/images/shruti.jpg"),
  // ... other images
};

export const NotificationsScreen = ({ navigation }) => {
  //searchbar
  const [searchQuery, setSearchQuery] = React.useState("");
  const onChangeSearch = (query) => setSearchQuery(query);

  //card
  const LeftContent = (props) => (
    <Avatar.Image
      size={avatarSize}
      source={require("../assets/images/shruti.jpg")}
    />
  );

  return (
    <SafeAreaView style={containerStyles.fullscreen}>
      <View style={containerStyles.usablescreen}>
        <Searchbar
          style={containerStyles.searchBar}
          placeholder=""
          onChangeText={onChangeSearch}
          value={searchQuery}
          inputStyle={textStyles.searchText}
        />
        <ScrollView>
          {notifications.map((i, index) => (
            <Card
              style={containerStyles.card}
              onPress={() => navigation.navigate("Profile")}
            >
              <Card.Title
                title=""
                subtitle={i.notification}
                left={() => (
                  <Avatar.Image
                    size={avatarSize}
                    source={localImages[i.senderImage]}
                  />
                )}
                titleNumberOfLines={2}
                subtitleNumberOfLines={2}
              />
            </Card>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};
