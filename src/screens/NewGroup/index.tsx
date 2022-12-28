import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highight";
import { Input } from "@components/Input";
import { Container, Content, Icon } from "./styles";

export function NewGroup() {
    return (
        <Container>
            <Header showBackButton />

            <Content>
                <Icon />
                <Highlight
                    title="Nova Turma"
                    subtitle="Cri a turma para adicionar as pessoas"
                />
                <Input
                    placeholder="Nome da Turma"
                />

                <Button 
                    title="Criar"
                    style={{marginTop:20}}
                />
            </Content>
        </Container>
    );
}
