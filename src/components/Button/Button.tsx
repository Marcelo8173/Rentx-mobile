import React from 'react'
import {IButtonProps} from './models'
import * as S from './styled'

const Button = ({title, color="primary"}:IButtonProps) => {
    return(
        <>
            <S.Button color={color}>
                <S.TextButton>{title}</S.TextButton>
            </S.Button>
        </>
    )
}

export default Button