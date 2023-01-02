import styled from "styled-components/native";
import { Dimensions } from "react-native";
import { Colors } from "../constants/style";

export const Container = styled.View`
    flex:1;
    align-item:center;
    background-color:${Colors.white};
` 

export const screenWidth = Dimensions.get('screen').width
export const screenHeight = Dimensions.get('screen').height