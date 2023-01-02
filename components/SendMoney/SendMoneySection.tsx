import { Alert, StyleSheet, Text, View } from 'react-native'
import React,{FunctionComponent, useRef} from 'react'
import { Colors } from '../../constants/style'
import SmallText from '../Text/SmallText'
import RegularText from '../Text/RegularText'
import styled from 'styled-components/native'
import { SendMoneySectionProps } from './types'
import BottomSheet from 'reanimated-bottom-sheet'
import SendMoneyItem from './SendMoneyItem'


const SendMoneySectionBackground = styled.View`
    width:100%;
    padding-top:15px;
    background-color:${Colors.white};
`

const SendMoneyRow = styled.View`
    width:100%;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
    padding-horizontal:25px;
`

const SendMoneyList = styled.FlatList`
    width:100%;
    flex:auto;
    min-height:80%;
    padding-horizontal:25px;
`

const TextButton = styled.TouchableOpacity`

`
 

const SendMoneySection:FunctionComponent<SendMoneySectionProps> = (props) => {
    const sheetRef = useRef<BottomSheet>(null)

    const renderContent = ()=> {
        return (
            <SendMoneySectionBackground>
                <SendMoneyRow style={{marginBottom:25}}>
                    <RegularText textStyle={{fontSize:19, color:Colors.graydark}}>
                        Send Money To
                    </RegularText>
                    <TextButton onPress={()=> alert("Add")}>
                        <SmallText textStyle={{fontWeight:'bold', color:Colors.graydark}}>
                            +ADD
                        </SmallText>
                    </TextButton>
                </SendMoneyRow>

                <SendMoneyList 
                    data={props.data} 
                    showsVerticalScrollIndicators={false}
                    horizontal={false}
                    numColumns={3}
                    contentContainerStyle={
                        {
                            alignItems:'flex-start'
                        }
                    }
                    keyExtractor={({id}:any) => id.toString()}
                    renderItem={({item}:any) => <SendMoneyItem {...item}/>}
                    />
            </SendMoneySectionBackground>
        )
    }

  return (
    <BottomSheet 
        ref={sheetRef}
        snapPoints={[240,85]}
        borderRadius={25}
        initialSnap={1}
        enabledContentTapInteraction={false}
        renderContent={renderContent}
    />
  )
}

export default SendMoneySection
