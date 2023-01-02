import { StyleSheet, Text, View } from 'react-native'
import React,{FunctionComponent} from 'react'
import { Colors } from '../../constants/style'
import SmallText from '../Text/SmallText'
import RegularText from '../Text/RegularText'
import styled from 'styled-components/native'
import { screenWidth } from '../shared'
import { SendMoneyProps } from './types'
import Profile from '../Header/Profile'

const SendMoneyItemContainer = styled.TouchableHighlight`
    height:130px;
    width:${screenWidth * 0.27}px;
    padding:10px;
    border-radius:15px;
    justify-content:space-around;
    margin:0px 10px 10px 0px;

`
const SendMoneyItem:FunctionComponent<SendMoneyProps> = (props) => {

  return (
    <SendMoneyItemContainer
        underlayColor={Colors.primary100}
        style={{backgroundColor:props.background}}
        onPress={()=> alert('Send Money')}

    >
        <>
            <Profile img={props.img} imgContainerStyle={{marginBottom:10}}/>
            <SmallText textStyle={{textAlign:'left', color:Colors.white, fontSize:12}}>
                {props.name}
            </SmallText>
            <RegularText textStyle={{textAlign:'left', color:Colors.white, fontSize:13}}>
                {props.amount}
            </RegularText>
        </>
    </SendMoneyItemContainer>
  )
}


export default SendMoneyItem
