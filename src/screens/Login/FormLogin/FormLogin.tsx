import React, { useState } from 'react'
import { Input } from '../../../components';
import * as S from './styled'
import { Text, View } from 'react-native'
import {Button} from '../../../components/Button'
import CheckBox from '@react-native-community/checkbox';

const FormLogin = () => {

    const [showPassword, setShowPassword] = useState(false)
    const [remember,setRemember] = useState(false)

    const handleGetSafety = () => {
        setShowPassword(!showPassword)
    }

    return(
        <S.ContentForm
            behavior="position"
            enabled
        >
            <Input
                autoCapitalize="none"
                autoCorrect={false}
                icon="mail"
                textContentType="emailAddress"
                placeholder="E-mail"
            />
            <Input 
                autoCapitalize="none"
                autoCorrect={false}
                icon="lock"
                textContentType="password"
                secureTextEntry={showPassword ? true: false}
                placeholder="Senha"
                iconInInput="eye"
                getSafety={handleGetSafety}
            />

            <S.Remember>
                <S.CheckboxContent>
                    <CheckBox 
                        tintColors={{true: "#1B1B1F"}} 
                        value={remember}
                        onValueChange={setRemember}
                    />
                    <Text>Lembre-me</Text>
                </S.CheckboxContent>
                <Text>Esqueci minha senha</Text>
            </S.Remember>

            <Button title="Login"/>
        </S.ContentForm>
    )
}

export default FormLogin;