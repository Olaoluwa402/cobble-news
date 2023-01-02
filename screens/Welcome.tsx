import React, { FunctionComponent, useContext } from "react";
import { StatusBar } from "expo-status-bar";
import styled from "styled-components/native";
import bg from "../assets/images/bg_3.png";
import BigText from "../components/Text/BigText";
import SmallText from "../components/Text/SmallText";
import RegularButton from "../components/Buttons/RegularButton";
import { GlobalContext } from "../context";
import { contextProps } from "../@type";

//custom components
import { Colors } from "../constants/style";
import { Container } from "../components/shared";

const WelcomeContainer = styled(Container)`
  background-color: ${Colors.black200};
  height: 100%;
  width: 100%;
  justify-content: space-between;
`;

const TopSection = styled.View`
  width: 100%;
  max-height: 50%;
  flex: 1;
`;

const TopImage = styled.Image`
  width: 100%;
  height: 100%;
  resize-mode: cover;
`;

const BottomSection = styled.View`
  width: 100%;
  padding: 25px;
  flex: 1;
  justify-content: flex-end;
`;

import { RootStackParamList } from "../Navigators/RootStack";
import { StackScreenProps } from "@react-navigation/stack";

type Props = StackScreenProps<RootStackParamList, "Welcome">;

const Welcome: FunctionComponent<Props> = ({ navigation }) => {
  const { setActiveTab } = useContext(GlobalContext) as contextProps;
  return (
    <>
      <StatusBar style="light" />
      <WelcomeContainer>
        <TopSection>
          <TopImage source={bg} />
        </TopSection>
        <BottomSection>
          <BigText textStyle={{ width: "70%", marginBottom: 25 }}>
            COBBLE: Latest News & Best investment platform ever
          </BigText>
          <SmallText textStyle={{ width: "70%", marginBottom: 25 }}>
            Latest News, get loan, receive, and send money to your friends
          </SmallText>
          <RegularButton
            textStyle={{ color: Colors.white, textAlign: "center" }}
            onPress={() => {
              setActiveTab("CobbleNews");
              navigation.navigate("CobbleNews");
            }}
          >
            Get Started
          </RegularButton>
        </BottomSection>
      </WelcomeContainer>
    </>
  );
};

export default Welcome;
