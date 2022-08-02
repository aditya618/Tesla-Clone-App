import { Text, View, ImageBackground } from "react-native";
import React from "react";
import styles from "./styles";
import StyledButton from "../StyledButton";

const CarItem = ({ name, tagline, image, taglineCTA }) => {
  return (
    <View style={styles.carContainer}>
      <ImageBackground style={styles.image} source={image} />
      <View style={styles.titles}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subTitle}>
          {tagline} <Text style={styles.subTitleCTA}>{taglineCTA}</Text>
        </Text>
      </View>
      <View style={styles.btnContainer}>
        <StyledButton
          type="primary"
          content="Custom Order"
          onPress={() => alert("primary")}
        />
        <StyledButton
          type="secondary"
          content="Existing Inventory"
          onPress={() => alert("secondary")}
        />
      </View>
    </View>
  );
};

export default CarItem;
