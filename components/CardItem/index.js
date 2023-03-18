import React from "react";
import { Text, View, ImageBackground } from "react-native";
import styles from "./styles";
import StyledButton from "../StyledButton";

const CardItem = ({ item }) => {
  return (
    <View style={styles.carContainer}>
      <ImageBackground source={item.image} style={styles.image} />
      <View style={styles.titles}>
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.subtitle}>
          {item.tagline}{" "}
          <Text style={styles.subtitleCTA}>{item.taglineCTA}</Text>
        </Text>
      </View>

      <View style={styles.buttonContainer}>
        <StyledButton
          type={"primary"}
          content={"Custom Order"}
          onPress={() => {
            console.warn("Custom Order is pressed");
          }}
        />

        <StyledButton
          type={"secondary"}
          content={"Existing Inventory"}
          onPress={() => {
            console.warn("Existing Inventory is pressed");
          }}
        />
      </View>
    </View>
  );
};

export default CardItem;
