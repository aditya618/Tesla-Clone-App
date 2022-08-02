import { View, Text, FlatList, Dimensions } from "react-native";
import React from "react";
import cars from "./cars";
import styles from "./styles";
import CarItem from "../CarItem";

const CarList = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={cars}
        snapToAlignment={"start"}
        decelerationRate={"fast"}
        snapToInterval={Dimensions.get("window").height}
        renderItem={({ item }) => (
          <CarItem
            name={item.name}
            tagline={item.tagline}
            taglineCTA={item.taglineCTA}
            image={item.image}
          />
        )}
      />
    </View>
  );
};

export default CarList;
