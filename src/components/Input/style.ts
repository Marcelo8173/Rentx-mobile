import styled from 'styled-components/native'
import {TextInput} from 'react-native'
import {RFPercentage} from 'react-native-responsive-fontsize'

export const Container = styled.View`
    flex-direction: row;
`;

export const IconContainer = styled.View`
    background: #F2F2FA;
    margin-right: 5px;
    justify-content: center;
    padding: 0 17px;
    margin-bottom: 8px;
`

export const Wrapper = styled.View`
    margin-bottom: 8px;
    background: #F2F2FA;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-right: 17px;
    flex: 1;
`;

export const Input = styled(TextInput)`
    padding: 20px;
    flex: 1;
`;

