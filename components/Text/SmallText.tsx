import { Text, View } from 'react-native'
import React,{FunctionComponent} from 'react'
import styled from 'styled-components/native'
import { Colors } from '../../constants/style'
import { TextProps } from './types'



const StyledText = styled.Text`
  font-size:13px;
  color:${Colors.primary200};
  text-align:left;
  font-family:Lato-Regular;

`

const SmallText:FunctionComponent<TextProps> = ({textStyle,children}) => {
  return (
    <>
      <StyledText style={textStyle}>{children}</StyledText>
    </>
  )
}

export default SmallText

