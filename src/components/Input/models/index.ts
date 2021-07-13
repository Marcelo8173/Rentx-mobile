import React from "react";
import { TextInputProps } from "react-native";
import { Feather } from '@expo/vector-icons'

export interface IInputProps extends TextInputProps {
    icon?: "mail" | "lock"  
}