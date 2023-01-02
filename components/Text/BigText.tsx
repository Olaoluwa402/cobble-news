import { Text, View } from 'react-native'
import React,{FunctionComponent} from 'react'
import styled from 'styled-components/native'
import { Colors } from '../../constants/style'
import { TextProps } from './types'


const StyledText = styled.Text`
  font-size:30px;
  color:${Colors.white};
  text-align:left;
  font-family:Lato-Bold;

`

const BigText:FunctionComponent<TextProps> = ({textStyle,children}) => {
  return (
    <>
      <StyledText style={textStyle}>{children}</StyledText>
    </>
  )
}

export default BigText

