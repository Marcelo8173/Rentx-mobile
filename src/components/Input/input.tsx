import React from 'react'
import * as S from './style'
import {IInputProps} from './models'
import { View } from 'react-native'
import { Feather } from '@expo/vector-icons'

const Input:React.FC<IInputProps> = ({icon,...rest}) => {
    return(
        <S.Container>
            {icon && 
                <S.IconContainer>
                    <Feather size={20} color="#7A7A80" name={icon}/>
                </S.IconContainer>
            }
            <S.Wrapper>
                <S.Input 
                    placeholderTextColor="#AEAEB3" 
                    {...rest}
                />
            </S.Wrapper>
        </S.Container>
    )
}

export default Input