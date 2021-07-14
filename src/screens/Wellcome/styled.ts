import styled, { css } from 'styled-components/native'
import { ScrollView } from 'react-native-gesture-handler'
import {RFValue} from 'react-native-responsive-fontsize'

export const Wrapper = styled(ScrollView)`
    ${({theme}) => css`
        flex: 1;
        background: ${theme.colors.black}; 
    `} 
`

export const Header = styled.View`
    margin-top: ${RFValue(160)}px;
    align-items: center;
`
export const Title = styled.Text`
    ${({theme}) => css`
        margin: ${RFValue(120)}px ${RFValue(72)}px 0 ${RFValue(72)}px;
        color: ${theme.colors.blackGrayPrincipal};
        text-align: center;
        font-family: ${theme.fonts.archive.semiBold};
        font-size: ${RFValue(40)}px;
    `}

`