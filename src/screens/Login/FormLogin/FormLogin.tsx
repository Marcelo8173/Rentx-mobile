import React from 'react'
import { Input } from '../../../components';
import * as S from './styled'
import { Text } from 'react-native'
import {Button} from '../../../components/Button'

const FormLogin = () => {
    return(
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

            <Button title="Login"/>
        </S.ContentForm>
    )
}

export default FormLogin;