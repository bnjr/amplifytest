import React from "react";
import { FlatList, View, Text, StyleSheet } from "react-native";
import { Card, Avatar, Paragraph } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { containerStyles } from "../styles/containerStyles";

type Review = {
  id: string;
  name: string;
  review: string;
  date: string;
  avatar: string; // URL or local path to the avatar image
  rating: number;
};

const localImages = {
  image1: require("../assets/images/shruti.jpg"),
  image2: require("../assets/images/aryaman.jpg"),
  image3: require("../assets/images/dilesh.jpg"),
  image4: require("../assets/images/syna.jpg"),
  // ... other images
};

const reviews: Review[] = [
  {
    id: "1",
    name: "Shruti Bansal",
    review: "Amazing App !!!",
    date: "A day ago",
    avatar: localImages.image1, //"../assets/images/aryaman.jpg", // Replace with actual path or URL
    rating: 4,
  },
  {
    id: "2",
    name: "Dilesh Bansal",
    review:
      "Its getting there !!! and some unnecesarily long string and a whole paragraph for testingand some unnecesarily long string and a whole paragraph for testing",
    date: "A day ago",
    avatar: localImages.image3, //"../assets/images/aryaman.jpg", // Replace with actual path or URL
    rating: 3,
  },
  {
    id: "3",
    name: "Aryaman Bansal",
    review: "Sucks !!!",
    date: "A day ago",
    avatar: localImages.image2, //"../assets/images/aryaman.jpg", // Replace with actual path or URL
    rating: 1,
  },
  // Add more review objects here
];

const ReviewScroller: React.FC = () => {
  const renderReview = ({ item }: { item: Review }) => (
    <Card style={containerStyles.reviewcard}>
      <Card.Title
        title={item.name}
        subtitle={item.date}
              left={(props) => <Avatar.Image {...props} source={ item.avatar } />}
      />
      <Card.Content>
        <View style={containerStyles.rating}>
          {Array.from({ length: item.rating }, (_, index) => (
            <MaterialCommunityIcons
              key={index}
              name="star"
              size={24}
              color="#116611"
            />
          ))}
        </View>
        <Paragraph numberOfLines={2} ellipsizeMode="tail">
          {item.review}
        </Paragraph>
      </Card.Content>
    </Card>
  );

  return (
    <FlatList
      data={reviews}
      renderItem={renderReview}
      keyExtractor={(item) => item.id}
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 0, // Prevents FlatList from stretching its items
  },
  card: {
    margin: 10,
    borderRadius: 10,
    elevation: 3, // for shadow on Android
    shadowColor: "#000", // for shadow on iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },

});

export default ReviewScroller;
