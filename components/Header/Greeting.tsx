import { StyleSheet, Text, View, TextStyle, StyleProp } from 'react-native'
import React, {FunctionComponent} from 'react'
import styled from 'styled-components/native'

import RegularText from '../Text/RegularText'
import SmallText from '../Text/SmallText'
import { Colors } from '../../constants/style'

const StyledView = styled.View`
  flex-direction:column;
  flex:1;
  justify-content:center;
`

interface GreetingProps {
    mainText?:string;
    subText?:string;
    mainTextStyle?:StyleProp<TextStyle>;
    subTextStyle?:StyleProp<TextStyle>;
}

const Greeting:FunctionComponent<GreetingProps> = ({mainText,subText,mainTextStyle,subTextStyle}) => {

  return (
    <StyledView>
       <RegularText textStyle={[
        {color:Colors.primary100, fontSize:22},
        mainTextStyle
        ]}>{mainText}</RegularText>

    <SmallText textStyle={[
        {color:Colors.graydark},
        subTextStyle
        ]}>{subText}</SmallText>
    </StyledView>
  )
}

export default Greeting