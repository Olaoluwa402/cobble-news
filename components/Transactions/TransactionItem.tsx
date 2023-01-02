import { StyleSheet, Text, View } from 'react-native'
import React, {FunctionComponent} from 'react'
import { TransactionProps } from './types' 
import styled from 'styled-components/native'
import { Colors } from '../../constants/style'
import RegularText from '../Text/RegularText'
import SmallText from '../Text/SmallText'
import {Ionicons} from '@expo/vector-icons'
import TransactionAvi from './TransactionAvi'

const TransactionRow = styled.View`
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
    width:100%;
    margin-bottom:25px;
`
const LeftView = styled.View`
    flex-direction:row;
    justify-content:flex-start;
    align-items:center;
    height:100%;
    flex:2;
`
const RightView = styled.View`
    flex:1;
`

const TransactionItem:FunctionComponent<TransactionProps> = (props) => {
  return (
    <TransactionRow>
        <LeftView>
         <TransactionAvi background={props.art.background} icon={props.art.icon}/>

         <View style={{marginLeft:10}}>
            <RegularText textStyle={{color:Colors.primary100, textAlign:'left', marginBottom:5}}>
              {props.title}
            </RegularText>
            <SmallText textStyle={{color:Colors.graydark, textAlign:'left'}}>
              {props.subtitle}
            </SmallText>
         </View>
        </LeftView>
        <RightView>
            <RegularText textStyle={{color:Colors.primary100, textAlign:'right', marginBottom:5}}>
              {props.amount}
            </RegularText>
            <SmallText textStyle={{color:Colors.graydark, textAlign:'right'}}>
              {props.date}
            </SmallText> 
        </RightView> 
    </TransactionRow>
  )
}

export default TransactionItem
