import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  StatusBar,
  ImageBackground,
} from "react-native";

import CarList from "./components/CarList";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <CarList />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    // paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
