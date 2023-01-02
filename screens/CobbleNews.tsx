import { StyleSheet, Text, View, FlatList } from "react-native";
import React, { useEffect, useContext, FunctionComponent } from "react";
import BottomTab from "../components/BottomTab/BottomTab";
import Divider from "../components/Divider/Divider";
import Back from "../components/Back/Back";
import Search from "../components/Search/Search";
import RegularText from "../components/Text/RegularText";
import NewsItem from "../components/News/NewsItem";
import { GlobalContext } from "../context";
import LottieView from "lottie-react-native";
import { Colors } from "../constants/style";
import { StatusBar } from "expo-status-bar";
import { contextProps } from "../@type";

const CobbleNews: FunctionComponent = () => {
  //get news fro global state
  const { loading, news, getNews } = useContext(GlobalContext) as contextProps;

  useEffect(() => {
    //defaults to apple
    getNews("apple");
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />

      <View style={styles.main}>
        {/* back */}
        <Back />
        {/* search */}
        <View style={styles.search}>
          <RegularText textStyle={styles.regularTextStyle}>Search</RegularText>
          <Search placeholderText="Search by title or keyword" />
        </View>

        {/* news */}
        <View style={{ flex: 1 }}>
          <RegularText textStyle={styles.regularTextStyle}>News</RegularText>
          {loading ? (
            <LottieView
              source={require("../assets/Lottie/29192-spinner-loader-animation.json")}
              autoPlay
              speed={1}
              loop={true}
            />
          ) : news && news.length > 0 ? (
            <View style={{ flex: 1 }}>
              <FlatList
                data={news}
                contentContainerStyle={{
                  paddingRight: 25,
                }}
                keyExtractor={({ id }) => id.toString()}
                renderItem={({ item }) => <NewsItem item={item} />}
              />
            </View>
          ) : (
            <View>
              <Text>No News</Text>
            </View>
          )}
        </View>
      </View>

      <Divider />
      {/* botto tab */}
      <BottomTab />
    </View>
  );
};

export default CobbleNews;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  main: {
    flex: 1,
    margin: 20,
    marginBottom: 0,
    marginTop: 40,
    // backgroundColor: "gray",
  },
  search: {
    marginVertical: 15,
  },
  regularTextStyle: {
    color: Colors.dark40,
    textAlign: "left",
    fontWeight: "900",
    fontSize: 20,
  },
});
