import { RectButtonProperties } from "react-native-gesture-handler";

export interface IButtonProps extends RectButtonProperties{
    title: string;
    color?: "primary" | "secundary"
}