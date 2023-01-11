import { useState } from "react";
import { FlatList } from "react-native";
import { GroupCard } from "@components/GroupCard";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highight";
import { Container } from "./styles";
import { ListEmpty } from "@components/ListEmpty";
import { Button } from "@components/Button";
import { useNavigation } from "@react-navigation/native";


export function Groups() {

    const [groups, setGroups] = useState<string[]>([]);

    const navigation = useNavigation();


    function handleNewGroup() {
        navigation.navigate("new")
    }

    return (
        <Container>
            <Header />
            <Highlight
                title="Turmas"
                subtitle="Jogue com a sua turma!"
            />

            <FlatList
                data={groups}
                keyExtractor={item => item}
                renderItem={({ item }) => (
                    <GroupCard
                        title={item}
                    />
                )}
                contentContainerStyle={groups.length === 0 && { flex: 1 }}
                ListEmptyComponent={() => (
                    <ListEmpty
                        mensage="Lista vazia. Cadastre uma nova turma!"
                    />
                )}
                showsVerticalScrollIndicator={false}
            />

            <Button
                title="Criar nova turma"
                onPress={handleNewGroup}
            />

        </Container>
    );
}