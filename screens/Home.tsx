import { StyleSheet, Text, View } from "react-native";
import React, { FunctionComponent } from "react";
import { Container } from "../components/shared";
import styled from "styled-components/native";
import { Colors } from "../constants/style";
import { StatusBar } from "expo-status-bar";
import visa from "../assets/images/visa.png";
import mastercard from "../assets/images/mastercard.png";
import CardSection from "../components/Cards/CardSection";
import TransactionSection from "../components/Transactions/TransactionSection";
import SendMoneySection from "../components/SendMoney/SendMoneySection";
import portrait_1 from "../assets/images/portrait_1.png";
import portrait_2 from "../assets/images/portrait_2.png";
import portrait_3 from "../assets/images/portrait_3.png";
import Back from "../components/Back/Back";

const HomeContainer = styled(Container)`
  background-color: ${Colors.graylight};
  flex: 1;
  width: 100%;
`;
import { RootStackParamList } from "../Navigators/RootStack";
import { StackScreenProps } from "@react-navigation/stack";

export type Props = StackScreenProps<RootStackParamList, "Home">;

const Home: FunctionComponent<Props> = () => {
  const cardsData = [
    {
      id: 1,
      accountNumber: "1245879679",
      balance: 3000,
      alias: "Personal prepaid",
      logo: visa,
    },
    {
      id: 2,
      accountNumber: "1245767989",
      balance: 2000,
      alias: "Word Debit",
      logo: mastercard,
    },
    {
      id: 3,
      accountNumber: "1285696032",
      balance: 1000,
      alias: "Hospital prepaid",
      logo: visa,
    },
  ];
  const transactionData = [
    {
      id: "1",
      amount: "-$78.00",
      date: "14-sept-2022",
      title: "personal car",
      subtitle: "Toyota",
      art: {
        icon: "car",
        background: Colors.pink100,
      },
    },
    {
      id: "2",
      amount: "-$12.00",
      date: "02-aug-2022",
      title: "shopping",
      subtitle: "jumia",
      art: {
        icon: "basket",
        background: Colors.primary100,
      },
    },
    {
      id: "3",
      amount: "-$18.00",
      date: "14-jan-2022",
      title: "shoe",
      subtitle: "jumia",
      art: {
        icon: "car",
        background: Colors.primary500,
      },
    },
  ];

  const sendMoneyData = [
    {
      id: 1,
      amount: "2450.00",
      name: "Olaoluwa Ibukun",
      background: Colors.pink100,
      img: portrait_1,
    },
    {
      id: 2,
      amount: "3450.00",
      name: "John Doe",
      background: Colors.primary100,
      img: portrait_2,
    },
    {
      id: 3,
      amount: "5450.00",
      name: "James Smith",
      background: Colors.primary500,
      img: portrait_3,
    },
  ];

  return (
    <HomeContainer>
      <StatusBar style="dark" />
      <Back />
      <CardSection data={cardsData} />
      <TransactionSection data={transactionData} />
      <SendMoneySection data={sendMoneyData} />
    </HomeContainer>
  );
};

export default Home;
