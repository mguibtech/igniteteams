import { ButtonIcon } from "@components/ButtonIcon";
import { Fillter } from "@components/Fillter";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highight";
import { Input } from "@components/Input";
import { useState } from "react";
import { FlatList } from "react-native";
import { Container, Form, HeaderList, NumberOfPlayers } from "./styles";

export function Players() {
    const [team, setTeam] = useState('Time A')
    const [players, setPlayers] = useState(['Guibson'])

    return (
        <Container>
            <Header showBackButton />

            <Highlight
                title="Nome da Turma"
                subtitle="Adicione a galera e separe os times"
            />

            <Form>
                <Input
                    placeholder="Nome da Pessoa"
                    autoCorrect={false}
                />
                <ButtonIcon icon="add" />
            </Form>

            <HeaderList>
                <FlatList
                    data={['Time A', 'Time B']}
                    keyExtractor={item => item}
                    renderItem={({ item }) => (
                    <Fillter
                        title={item}
                        isActive = {item === team}
                        onPress={() => setTeam(item)}
                    />)}
                    horizontal
                />

                <NumberOfPlayers>
                    {players.length}
                </NumberOfPlayers>
            </HeaderList>

            
        </Container>
    )
}