import React from "react";
import { View, SafeAreaView} from "react-native";
import { Avatar, Card, Searchbar } from "react-native-paper";
import { containerStyles } from "../styles/containerStyles";
import { avatarSize } from "../styles/imageStyles";
import { textStyles } from "../styles/textStyles";

export const SettingsScreen = ({ navigation }) => {
  //searchbar
  const [searchQuery, setSearchQuery] = React.useState("");
  const onChangeSearch = (query) => setSearchQuery(query);

  //card
  const LeftContent = (props) => (
    <Avatar.Image size={avatarSize} source={require("../assets/images/shruti.jpg")} />
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

        <Card onPress={() => navigation.navigate("Profile")}>
          <Card.Title
            title="Dilesh Bansal"
            subtitle="Available"
            left={LeftContent}
          />
        </Card>
      </View>
    </SafeAreaView>
  );
}
