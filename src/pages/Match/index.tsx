import {
  ImageBackground,
  StyleSheet,
  Image,
  View,
  TouchableOpacity,
  Text,
} from "react-native";
import { Fontisto } from "@expo/vector-icons";
import * as Linking from "expo-linking";
import { ICat } from "../../../App";

type matchType = {
  reset: () => void;
};

export function Match({ reset }: matchType) {
  function hireMe() {
    Linking.openURL("https://www.linkedin.com/in/andersonrafaelferreira/");
  }

  return (
    <ImageBackground
      source={require("../../../assets/match.jpeg")}
      style={styles.container}
    >
      <TouchableOpacity style={styles.closeButton}
        onPress={reset}
      >
        <Fontisto name="close-a" size={32} color="lightgray" />
      </TouchableOpacity>
      <Image source={require("../../../assets/its.png")} />
      <View style={styles.emojisWrapper}>
        <TouchableOpacity onPress={hireMe} style={styles.emojiButton}>
          <Text style={styles.emojiSize}>😍</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={hireMe} style={styles.emojiButton}>
          <Text style={styles.emojiSize}>😉</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={hireMe} style={styles.emojiButton}>
          <Text style={styles.emojiSize}>👋</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={hireMe} style={styles.emojiButton}>
          <Text style={styles.emojiSize}>❤️</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
  },
  emojisWrapper: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
  closeButton: { alignSelf: "flex-end", marginRight: 30 },
  emojiSize: { fontSize: 30 },
  emojiButton: {
    borderRadius: 40,
    borderWidth: 2,
    borderColor: "white",
    paddingHorizontal: 15,
  },
});
