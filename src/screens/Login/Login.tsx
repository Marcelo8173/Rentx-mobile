import React from 'react'
import { Input } from '../../components'
import {Text} from 'react-native'
import * as S from './styled'
import {RectButton} from 'react-native-gesture-handler'

const Login = () => {
    return(
        <S.Wrapper>
            <S.Title>Estamos quase lá.</S.Title>
            <S.SubTitle>
                Faça seu login para começar
                uma experiência incrível.
            </S.SubTitle>
            <S.ContentForm>
                <Input
                    icon="mail"
                    textContentType="emailAddress"
                    placeholder="E-mail"
                />
                 <Input 
                    icon="lock"
                    textContentType="password"
                    secureTextEntry
                    placeholder="Senha"
                />

                <S.Remember>
                    <Text>Lembrar-me</Text>
                    <Text>Esqueci minha senha</Text>
                </S.Remember>

                <S.Button>
                    <Text>Login</Text>
                </S.Button>
            </S.ContentForm>
        </S.Wrapper>
    )
}

export default Login