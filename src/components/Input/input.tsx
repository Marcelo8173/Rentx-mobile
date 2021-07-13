import React from 'react'
import * as S from './style'
import {TouchableOpacity} from 'react-native'
import {IInputProps} from './models'
import { Feather } from '@expo/vector-icons'

const Input:React.FC<IInputProps> = ({getSafety,iconInInput,icon,...rest}) => {
    
    const showPassword = () => {
        !!getSafety && getSafety(true)
    }

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
                <TouchableOpacity onPress={showPassword}>
                    <Feather size={21} color="#AEAEB3" name={iconInInput} />
                </TouchableOpacity>
            </S.Wrapper>
        </S.Container>
    )
}

export default Input