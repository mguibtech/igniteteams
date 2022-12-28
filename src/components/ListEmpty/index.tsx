import { Container, Mensage } from "./styles";

type Props = {
    mensage: string;
}

export function ListEmpty({mensage}: Props){
    return(
        <Container>
            <Mensage>
                {mensage}
            </Mensage>
        </Container>
    )
}