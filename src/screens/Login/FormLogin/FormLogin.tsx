import React, { useState } from 'react'
import { Input } from '../../../components';
import * as S from './styled'
import { Text, TouchableOpacity } from 'react-native'
import {Button} from '../../../components/Button'
import CheckBox from '@react-native-community/checkbox';
import { useNavigation } from '@react-navigation/native';

const FormLogin = () => {

    const [showPassword, setShowPassword] = useState(false)
    const [remember,setRemember] = useState(false)
    const navigation = useNavigation()

    const handleGetSafety = () => {
        setShowPassword(!showPassword)
    }

    const handleSubmit = () => {
        navigation.navigate('Dashboard')
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
                <TouchableOpacity>
                    <Text>Esqueci minha senha</Text>
                </TouchableOpacity>
            </S.Remember>

            <Button onPress={handleSubmit} title="Login"/>
        </S.ContentForm>
    )
}

export default FormLogin;