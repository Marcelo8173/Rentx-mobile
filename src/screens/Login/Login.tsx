import React from 'react'
import * as S from './styled'
import { FormLogin } from './FormLogin'

const Login = () => {
    return(
        <S.Wrapper>
            <S.Title>Estamos quase lá.</S.Title>
            <S.SubTitle>
                Faça seu login para começar
                uma experiência incrível.
            </S.SubTitle>
            <FormLogin />
        </S.Wrapper>
    )
}

export default Login