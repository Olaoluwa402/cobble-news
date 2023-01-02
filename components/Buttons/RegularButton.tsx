import {
  StyleProp,
  ViewStyle,
  TextStyle,
  GestureResponderEvent,
} from "react-native";
import React, { FunctionComponent, ReactNode } from "react";
import { Colors } from "../../constants/style";
import RegularText from "../Text/RegularText";
import styled from "styled-components/native";

interface Props {
  btnStyle?: StyleProp<ViewStyle>;
  onPress: ((event: GestureResponderEvent) => void) | undefined;
  textStyle?: StyleProp<TextStyle>;
  children: ReactNode;
}

const ButtonView = styled.TouchableOpacity`
  align-items: center;
  background-color: ${Colors.primary500};
  width: 100%;
  padding: 20px;
  border-radius: 20px;
`;

const RegularButton: FunctionComponent<Props> = ({
  btnStyle,
  textStyle,
  onPress,
  children,
}) => {
  return (
    <ButtonView style={btnStyle} onPress={onPress}>
      <RegularText textStyle={textStyle}>{children}</RegularText>
    </ButtonView>
  );
};

export default RegularButton;
