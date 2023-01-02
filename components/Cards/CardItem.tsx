import { Text, View } from 'react-native'
import React, { FunctionComponent } from 'react'
import { CardProps } from './types'
import { Colors } from '../../constants/style'
import styled from 'styled-components/native'
import { screenWidth } from '../shared'
import card_bg from '../../assets/images/bg_3.png'
import RegularText from '../Text/RegularText'
import SmallText from '../Text/SmallText'

const CardBackground = styled.ImageBackground`
    height:75%;
    width: ${screenWidth * 0.67}px;
    resize-mode:cover;
    background-color:${Colors.primary100};
    border-radius:25px;
    margin-right:25px;
    overflow:hidden;
`
const CardTouchable = styled.TouchableHighlight`
    height:100%;
    border-radius:25px;
`

const TouchableView = styled.View`
    justify-content:space-between;
    align-items:center;
    flex:1;
    padding:30px;
`
const CardRow = styled.View`
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
    width:100%;
`
const Logo = styled.Image`
    width:100%;
    height:100%;
    resize-mode:contain;
    flex:1;
` 
import { useNavigation } from '@react-navigation/native'
import { Props as HomeProps} from '../../screens/Home' 

const CardItem:FunctionComponent<CardProps> = (props) => {
    const navigation = useNavigation<HomeProps["navigation"]>()

    const handlePress = ()=>{
        navigation.navigate('Balance', {...props})
    }
  return (
    <CardBackground source={card_bg}>
        <CardTouchable underlayColor={Colors.primary100} onPress={handlePress}>
            <TouchableView>
                <CardRow>
                    <RegularText textStyle={{color:Colors.white}}>
                        ****** {props.accountNumber.slice(6,10)}
                    </RegularText>
                </CardRow>
                <CardRow> 
                    <View style={{flex:3}}>
                        <SmallText textStyle={{marginBottom:5, color:Colors.graylight}}>
                            Total Balance
                        </SmallText>
                        <RegularText textStyle={{fontSize:19, color:Colors.white200}}>${props.balance}</RegularText>
                    </View>
                    <Logo source={props.logo}/>
                </CardRow>
            </TouchableView>
        </CardTouchable> 
    </CardBackground>
  ) 
}

export default CardItem
