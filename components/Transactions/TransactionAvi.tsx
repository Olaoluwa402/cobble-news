import { StyleSheet, Text, View } from 'react-native'
import React,{FunctionComponent} from 'react'
import styled from 'styled-components/native'
import { Colors } from '../../constants/style'
import { TransactionAviProps } from './types'
import {Ionicons} from '@expo/vector-icons'

const StyledView = styled.View`
    width:45px;
    height:45px;
    border-radius:10px;
    justify-content:center;
    align-items:center;
`

const TransactionAvi:FunctionComponent<TransactionAviProps> = (props) => {
  return (
    <StyledView style={{backgroundColor:props.background}}>
      <Ionicons name={props.icon} size={25} color={Colors.white} />
    </StyledView>
  )
}

export default TransactionAvi
 