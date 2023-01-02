import { StyleSheet, Text, View } from 'react-native'
import React, {FunctionComponent} from 'react'
import styled from 'styled-components/native'
import { TransactionSectionProps } from './types'
import { Colors } from '../../constants/style'
import RegularText from '../Text/RegularText'
import SmallText from '../Text/SmallText'
import {Ionicons} from '@expo/vector-icons'
import TransactionItem from './TransactionItem'


const TransactionSectionBackground = styled.View`
    width:100%;
    padding-horizontal:25px;
    padding-top:5px;
    flex:2;
`

const TransactionRow = styled.View`
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
    width:100%;
`

const TransactionList = styled.FlatList`
    width:100%;
`

const TransactionSection:FunctionComponent<TransactionSectionProps> = (props) => {
  return (
    <TransactionSectionBackground>
      <TransactionRow style={{marginBottom:25}}>
        <RegularText textStyle={{fontSize:19, color:Colors.primary200}}>
            Transaction
        </RegularText>
        <SmallText textStyle={{color:Colors.graydark}}>
            Recent
            <Ionicons name='caret-down' size={13} color={Colors.graydark}/>
        </SmallText>
      </TransactionRow>

      <TransactionList 
        data={props.data} 
        showsVerticalScrollIndicators={false}
        contentContainerStyle={
            {
                paddingRight:25,
            }
        }
        keyExtractor={({id}:any) => id.toString()}
        renderItem={({item}:any) => <TransactionItem {...item}/>}
        />
    </TransactionSectionBackground>
  )
}

export default TransactionSection

const styles = StyleSheet.create({}) 