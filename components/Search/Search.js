import { StyleSheet, Text, View, TextInput } from "react-native";
import React, { useContext } from "react";
import { GlobalContext } from "../../context";

const Search = ({ placeholderText }) => {
  const { keyword, getNews } = useContext(GlobalContext);
  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder={placeholderText}
        onChangeText={(newText) => getNews(newText)}
        dafaultValue={keyword}
        style={styles.input}
      />
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  inputContainer: {
    marginVertical: 15,
    borderRadius: 5,
    backgroundColor: "#fff",
    elevation: 5, // android version of shadow

    // ios shadow,
    // shadowColor: "#fff",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
  input: {
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
});
