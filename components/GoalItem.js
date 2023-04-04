import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function GoalItem({ id, text, onDelete }) {
  return (
    <Pressable onPress={onDelete.bind(this, id)}>
      {/* //Surround Text with View so that style is the same on Android and IOS */}
      <View style={styles.goalItem}>
        <Text style={styles.goalText}>{text}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  goalText: {
    color: "white",
  },
});
