import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function GoalItem({ id, text, onDelete }) {
  return (
    //Surround Text with View so that style is the same on Android and IOS
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#210644" }}
        onPress={onDelete.bind(this, id)}
      >
        <Text style={styles.goalText}>{text}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  goalText: {
    color: "white",
    padding: 8,
  },
});
