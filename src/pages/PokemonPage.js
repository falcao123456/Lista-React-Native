import React from "react";
import { Appbar, List } from "react-native-paper";
import { ListItem, Avatar, Button, Overlay, Text } from "react-native-elements";
import { View, FlatList, StatusBar } from "react-native";

import { apiFilipe } from "../services/api";

export const Pokemon = () => {
  const [poke, setPoke] = React.useState([]);
  const [pokeSelected, setPokeSelected] = React.useState();
  const [visible, setVisible] = React.useState(false);
  const [expanded, setExpanded] = React.useState(true);

  React.useEffect(() => {
    console.log(pokeSelected)
    async function getpokemon() {
      const res = await apiFilipe.get();
      console.log(res.data.results);
      setPoke(res.data.results);
    }
    getpokemon();
  }, [pokeSelected]);

  const _goBack = () => alert("Tem certeza que deseja sair da pagina?");

  const handlePress = () => setExpanded(!expanded);

  async function getpokemon(id) {
    const res = await apiFilipe.get(`/${id}`)
    setPokeSelected(res.data)
    setVisible(!visible);
    console.log(pokeSelected)
  };

  return (
    <View>
      <StatusBar backgroundColor="#000" />
      <Appbar.Header>
        <Appbar.BackAction onPress={_goBack} />
        <Appbar.Content title="Lista de Pokemons" subtitle="Pokemons" />
      </Appbar.Header>
      <FlatList
        keyExtractor={poke => poke.nome}
        data={poke}
        renderItem={({ item }) => {
          return (
            <List.Accordion
              onPress={() => getpokemon(item.id)}
              title={item.name}
              left={(props) => <List.Icon {...props} icon="folder" />}
            >
              <List.Item title={item.name} />
              <List.Item title="Second item" />
            </List.Accordion>
          );
        }}
      />
    </View>
  );
};