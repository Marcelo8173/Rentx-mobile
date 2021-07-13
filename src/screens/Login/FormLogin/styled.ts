import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native'

export const ContentForm = styled.View`
    margin-top: ${RFValue(110)}px;
`;

export const Remember = styled.View`
    flex-direction: row;
    justify-content: space-between;
    color: red;
    margin-bottom: ${RFValue(34)}px;
`;