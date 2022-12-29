import { ButtonIcon } from "@components/ButtonIcon";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highight";
import { Input } from "@components/Input";
import { Container, Form } from "./styles";

export function Players(){
    return(
        <Container>
            <Header showBackButton/>

            <Highlight
                title="Nome da Turma"
                subtitle="Adicione a galera e separe os times"
            />

            <Form>
                <Input
                    placeholder="Nome da Pessoa"
                    autoCorrect={false}
                />
                <ButtonIcon icon="add"/>
            </Form>
            
            
        </Container>
    )
}