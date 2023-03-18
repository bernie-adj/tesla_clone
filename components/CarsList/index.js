import { View, Text, FlatList, Dimensions } from "react-native";
import React from "react";
import data from "./cars";
import CardItem from "./../CardItem/index";
import styles from "./styles";

const CarList = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => <CardItem item={item} />}
        keyExtractor={(item) => item.name}
        showsVerticalScrollIndicator={false}
        snapToAlignment="start"
        decelerationRate={"fast"}
        snapToInterval={Dimensions.get("window").height}
      />
    </View>
  );
};

export default CarList;
