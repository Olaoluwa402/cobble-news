import { StyleSheet, Text, View } from 'react-native'
import React,{FunctionComponent} from 'react'
import styled from 'styled-components/native'
import { Colors } from '../../constants/style'
import RegularButton from '../Buttons/RegularButton'
import {Ionicons} from '@expo/vector-icons'

const ButtonSectionBacground = styled.View`
    width:100%;
    align-items:center;
    flex:1
`
import { useNavigation } from '@react-navigation/native'
import { Props as BalanceProps} from '../../screens/Balance' 

const ButtonSection:FunctionComponent = () => {
 const navigation = useNavigation<BalanceProps["navigation"]>();
  return ( 
    <ButtonSectionBacground>
        <RegularButton 
          textStyle={{color:Colors.white}} 
          btnStyle={{width:'50%',backgroundColor:Colors.pink100}} 
          onPress={()=> {navigation.navigate('Welcome')}}>
            Cancel <Ionicons name='card' size={17} color={Colors.white}/>
        </RegularButton>
    </ButtonSectionBacground>
  )
}

export default ButtonSection

const styles = StyleSheet.create({})