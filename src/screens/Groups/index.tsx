import { useState, useEffect, useCallback } from "react";
import { FlatList } from "react-native";
import { GroupCard } from "@components/GroupCard";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highight";
import { Container } from "./styles";
import { ListEmpty } from "@components/ListEmpty";
import { Button } from "@components/Button";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { groupsGegAll } from "@storage/group/groupsGetAll";
import { Loading } from "@components/Loading";


export function Groups() {

    const [isLoading, setIsLoading] = useState(false);

    const [groups, setGroups] = useState<string[]>([]);

    const navigation = useNavigation();


    function handleNewGroup() {
        navigation.navigate("new")
    }

    async function fetchGroups() {
        try {
            setIsLoading(true)
            const data = await groupsGegAll();
            setGroups(data)

            
        } catch (error) {
            console.log(error)
        } finally{
            setIsLoading(false)
        }
    }

    function handleOpenGroup(group: string) {
        navigation.navigate('players', { group })
    }

    useFocusEffect(useCallback(() => {
        // oque deve ser executado
        // quando ele vai executar
        fetchGroups();
    }, []));

    return (
        <Container>
            <Header />
            <Highlight
                title="Turmas"
                subtitle="Jogue com a sua turma!"
            />

            {
                isLoading ? <Loading /> : <FlatList
                    data={groups}
                    keyExtractor={item => item}
                    renderItem={({ item }) => (
                        <GroupCard
                            title={item}
                            onPress={() => handleOpenGroup(item)}
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
            }

            <Button
                title="Criar nova turma"
                onPress={handleNewGroup}
            />

        </Container>
    );
}