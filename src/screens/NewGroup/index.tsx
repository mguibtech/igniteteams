import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highight";
import { Input } from "@components/Input";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Container, Content, Icon } from "./styles";

export function NewGroup() {
    const [group, setGroup] = useState('');
    
    const navigation =  useNavigation();

    function handleNew(){
        navigation.navigate('players', { group })
    }

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
                    onChangeText={setGroup}
                />

                <Button 
                    title="Criar"
                    style={{marginTop:20}}
                    onPress={handleNew}
                />
            </Content>
        </Container>
    );
}
