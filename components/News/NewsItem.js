import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { getDate } from "../utils/getDateTime";

const Chat = ({ item }) => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: item.urlToImage }}
        resizeMode="cover"
        style={styles.newsImage}
      />
      <Text style={styles.author}>Author: {item.author}</Text>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.date}>
        {getDate(item.publishedAt, "DD-MM-YYYY h:mm A")}
      </Text>
      <Text style={styles.description}>{item.description}</Text>
    </View>
  );
};

export default Chat;

const styles = StyleSheet.create({
  container: { marginVertical: 10 },
  newsImage: { width: "100%", height: 180 },
  title: { fontSize: 16, fontWeight: "700", marginVertical: 3 },
  description: { marginVertical: 10 },
  author: { fontStyle: "italic", color: "#222" },
  date: { fontStyle: "italic", color: "#222" },
});
