import { StyleSheet, Text, View } from 'react-native'
import React,{FunctionComponent} from 'react'
import { BalanceCardProps } from '../components/Balance/types'
import styled from 'styled-components/native'
import BalanceCard from '../components/Balance/BalanceCard'

const BalanceCardSectionBackground = styled.View`
    width:100%;
    flex:2;
    align-items:center;
`

const BalanceCardSection:FunctionComponent<BalanceCardProps> = (props) => {


  return (
    <BalanceCardSectionBackground>
        <BalanceCard {...props}/>
    </BalanceCardSectionBackground>
  )
}

export default BalanceCardSection

const styles = StyleSheet.create({})