import { RectButton } from 'react-native-gesture-handler';
import styled, { css, DefaultTheme } from 'styled-components/native'
import { IButtonProps } from './models'

const ButtonModifiers = {
    secundary: (theme:DefaultTheme) => css`
        background: #29292E
    `,
    primary: (theme:DefaultTheme) => css`
        background: ${theme.colors.principal};
    `
}

export const Button = styled(RectButton)<Pick<IButtonProps, "color">>`
    ${({theme, color}) => css`
        padding: 19px;
        align-items: center;
        ${!!ButtonModifiers && ButtonModifiers[color!](theme)}
    `}
`

export const TextButton = styled.Text`
    ${({theme}) => css`
        color: ${theme.colors.white};
        font-family: ${theme.fonts.inter.normal};
    `}
`