import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

function pressHandler() {}

export default function PrimaryButton({ children }) {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        onPress={pressHandler}
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }
        android_ripple={{ color: "#640233" }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonInnerContainer: {
    backgroundColor: "#72063c",
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  buttonOuterContainer: {
    margin: 4,
    borderRadius: 28,
    overflow: "hidden",
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  pressed: {
    opacity: 0.75,
  },
});
