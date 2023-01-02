import { StyleProp, ViewStyle,TextStyle,ImageStyle,ImageSourcePropType, GestureResponderEvent } from 'react-native'
import React, { FunctionComponent } from 'react'
import styled from 'styled-components/native'
import { Colors } from '../../constants/style'

const StyledView = styled.TouchableOpacity`
  flex-direction:column;
  width:45px;
  height:45px;
  border-radius:15px
`

const StyledImage = styled.Image`
  resize-mode:cover;
  width:100%;
  height:100%;
  border-radius:15px
`

interface ProfileInterface {
  img:ImageSourcePropType;
  imgStyle?:StyleProp<ImageStyle>;
  imgContainerStyle?:StyleProp<ViewStyle>;
  onPress?: ((event:GestureResponderEvent)=> void) | undefined

}
const Profile:FunctionComponent<ProfileInterface> = ({onPress,img,imgStyle,imgContainerStyle}) => {
  return (
    <StyledView onPress={onPress} style={imgContainerStyle}>
       <StyledImage source={img} style={imgStyle}/>
    </StyledView>
  )
}

export default Profile

