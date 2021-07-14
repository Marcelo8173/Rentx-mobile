import React from 'react'
import {IButtonProps} from './models'
import * as S from './styled'

const Button = ({onPress,title, color="primary"}:IButtonProps) => {
    return(
        <>
            <S.Button onPress={onPress} color={color}>
                <S.TextButton>{title}</S.TextButton>
            </S.Button>
        </>
    )
}

export default Button