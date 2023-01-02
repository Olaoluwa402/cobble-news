import { StyleSheet, Text, View } from 'react-native'
import React,{FunctionComponent} from 'react'
import styled from 'styled-components/native'
import { Colors } from '../../constants/style'
import SmallText from '../Text/SmallText'
import RegularText from '../Text/RegularText'

import { AmountProps } from './types'

const AmountSectionBackground = styled.View`
    width:100%;
    padding-top:5px;
    flex:1;
    align-items:center;
`

const AmountSection:FunctionComponent<AmountProps> = (props) => {
  return (
    <AmountSectionBackground>
        <SmallText textStyle={{color:Colors.black200, marginBottom:15}}>
            Total Balance
        </SmallText>
        <RegularText textStyle={{color:Colors.graydark, fontSize:28}}>
            ${props.balance}
        </RegularText>
    </AmountSectionBackground>
  )
}

export default AmountSection 
