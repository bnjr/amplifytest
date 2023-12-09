import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  FlatList,
  Image,
    SectionList
} from "react-native";
import { Avatar, Card, Button, Searchbar, List} from "react-native-paper";
import { containerStyles } from "../styles/containerStyles";
import { avatarSize, imageSize } from "../styles/imageStyles";
import { textStyles } from "../styles/textStyles";

const members = [
  {
    memberName: "Shruti Aggarwal",
    memberImage: "image1",
  },
  {
    memberName: "Aryaman",
    memberImage: "image2",
  },
  {
    memberName: "Dilesh",
    memberImage: "image3",
  },
  {
    memberName: "Shruti Aggarwal",
    memberImage: "image1",
  },
  {
    memberName: "Aryaman",
    memberImage: "image2",
  },
  {
    memberName: "Dilesh",
    memberImage: "image3",
  },
  {
    memberName: "Shruti Aggarwal",
    memberImage: "image1",
  },
  {
    memberName: "Aryaman",
    memberImage: "image2",
  },
  {
    memberName: "Dilesh",
    memberImage: "image3",
  },
  {
    memberName: "Syna",
    memberImage: "image4",
  },
  {
    memberName: "Syna2",
    memberImage: "image4",
  },
  // ... other members
];

const localImages = {
  image1: require("../assets/images/shruti.jpg"),
  image2: require("../assets/images/aryaman.jpg"),
  image3: require("../assets/images/dilesh.jpg"),
  image4: require("../assets/images/syna.jpg"),
  // ... other images
};

export const MembersList = ({ navigation }) => {
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
          {members.map((i, index) => (
            <Card
              style={containerStyles.card}
              onPress={() => navigation.navigate("Profile")}
            >
              <Card.Title
                title=""
                subtitle={i.memberName}
                left={() => (
                  <Avatar.Image
                    size={avatarSize}
                    source={localImages[i.memberImage]}
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

//------------------------------------------------------------------------------

export const MembersList2 = ({ navigation }) => {
  members.sort((a, b) => a.memberName.localeCompare(b.memberName));

  const ContactItem = ({ name, image }: { name: string; image: string }) => (
    <List.Item
      title={name}
      right={() => <Avatar.Image size={40} source={localImages[image]} />}
      style={containerStyles.row}
    />
  );

  return (
    <SafeAreaView style={containerStyles.fullscreen}>
      <ScrollView>
        <FlatList
          data={members}
          renderItem={({ item }) => (
            <ContactItem name={item.memberName} image={item.memberImage} />
          )}
          keyExtractor={(item) => item.memberName}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

//------------------------------------------------------------------------------

// Function to group the contacts by the first letter of their name
const groupContactsByAlphabet = (members) => {
  const sections = {};
  members.forEach((contact) => {
    const letter = contact.memberName[0].toUpperCase();
    if (!sections[letter]) {
      sections[letter] = [];
    }
    sections[letter].push(contact);
  });

  return Object.keys(sections)
    .sort()
    .map((letter) => ({
      title: letter,
      data: sections[letter].sort((a, b) =>
        a.memberName.localeCompare(b.memberName)
      ),
    }));
};

export const MembersList3 = ({ navigation }) => {
  members.sort((a, b) => a.memberName.localeCompare(b.memberName));

  const sections = groupContactsByAlphabet(members);

  return (
    <SafeAreaView style={containerStyles.fullscreen}>
      <SectionList
        sections={sections}
        renderItem={({ item }) => (
          <List.Item
            title={item.memberName}
            right={() => (
              <Avatar.Image size={40} source={localImages[item.memberImage]} />
            )}
            style={textStyles.displayTextLeftPad}
          />
        )}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={textStyles.displayTitle}>{title}</Text>
        )}
        keyExtractor={(item, index) => item.memberName + index}
        ItemSeparatorComponent={() => (
          <View style={containerStyles.separator} />
        )} // This line adds the separator
      />
    </SafeAreaView>
  );
};
