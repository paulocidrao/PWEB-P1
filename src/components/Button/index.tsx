import { ButtonContainer } from "./styles";

interface ButtonProps {
    text: string;
}

export default function Button({ text }: ButtonProps) {
    return (
        <ButtonContainer>{text}</ButtonContainer>
    )
}