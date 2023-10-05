import { ButtonHTMLAttributes, ReactNode } from "react";
import { ButtonContainer } from "./styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    icon?: ReactNode;
    text?: string;
    border?: 'corner' | 'full-rounded';
    background?: 'none' | 'primaryColor' | 'successColor';
    handleFunction?: () => void;
}

export default function Button({ text, icon, border, background = 'primaryColor', handleFunction }: ButtonProps) {
    return (
        <ButtonContainer onClick={handleFunction} border={border!} background={background}>
            {icon}
            {text}
        </ButtonContainer>
    )
}