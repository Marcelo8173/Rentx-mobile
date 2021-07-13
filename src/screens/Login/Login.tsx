import React from 'react'
import * as S from './styled'
import { FormLogin } from './FormLogin'
import { ScrollView } from 'react-native-gesture-handler'

const Login = () => {
    return(
        <ScrollView
            keyboardShouldPersistTaps='handled'
            contentContainerStyle={{flex: 1}}
        >
            <S.Wrapper>
                <S.Title>Estamos quase lá.</S.Title>
                <S.SubTitle>
                    Faça seu login para começar
                    uma experiência incrível.
                </S.SubTitle>
                <FormLogin />
            </S.Wrapper>
        </ScrollView>
    )
}

export default Login