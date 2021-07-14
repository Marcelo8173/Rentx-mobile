import React from 'react'
import Logo from '../../assets/logo'
import * as S from './styled'

const Wellcome = () => {
    return(
        <S.Wrapper>
            <S.Header>
                <Logo />
            </S.Header>
            <S.Title>
                Seja {"\n"} Bem-vindo 
            </S.Title>
        </S.Wrapper>
    )
}

export default Wellcome