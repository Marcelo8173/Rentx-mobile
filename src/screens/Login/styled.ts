import styled, { css } from 'styled-components/native'
import {RFValue} from 'react-native-responsive-fontsize'
import {RectButton} from 'react-native-gesture-handler'

export const Wrapper = styled.View`
    flex: 1;
    padding: 0 ${RFValue(32)}px;
    margin-top: ${RFValue(100)}px;
`;

export const Title = styled.Text`
    ${({theme}) => css`
        font-size: ${RFValue(40)}px;
        margin-right: ${RFValue(100)}px;
        margin-bottom: 24px;
        color: ${theme.colors.title};
        font-family: ${theme.fonts.archive.semiBold};
    `}
`;

export const SubTitle = styled.Text`
    ${({theme}) => css`
        color: ${theme.colors.text};
        font-family: ${theme.fonts.inter.normal};
        margin-right: ${RFValue(100)}px;
    `}
`;
