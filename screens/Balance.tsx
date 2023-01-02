import React,{FunctionComponent} from 'react'
import { StatusBar } from 'expo-status-bar'
import { Colors } from '../constants/style'
import styled from 'styled-components/native'
import { Container } from '../components/shared'
import AmountSection from '../components/Balance/AmountSection'
import BalanceCardSection from './BalanceCardSection'
import ButtonSection from '../components/Balance/ButtonSection'


const BalanceContainer = styled(Container)`
    background-color:${Colors.graylight};
    width:100%;
    padding:25px;
    flex:1;
`

import { RootStackParamList } from '../Navigators/RootStack'
import { StackScreenProps } from '@react-navigation/stack'

export type Props = StackScreenProps<RootStackParamList, "Balance">

const Balance:FunctionComponent<Props> = ({route}) => {
  return ( 
    <BalanceContainer>
        <StatusBar style='dark'/> 
        <AmountSection balance={route?.params?.balance}/> 
        <BalanceCardSection {...route?.params}/>
        <ButtonSection />
   </BalanceContainer>
  )
}

export default Balance 
