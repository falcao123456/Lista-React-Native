import React from "react";
import { Appbar, List, Card, Avatar } from "react-native-paper";
import { ListItem, Button, Overlay, Text } from "react-native-elements";
import { View, FlatList, StatusBar } from "react-native";

import { apiFilipe } from "../services/api";

export const Pokemon = () => {
  const [poke, setPoke] = React.useState([]);
  const [pokeSelected, setPokeSelected] = React.useState();
  const [visible, setVisible] = React.useState(false);
  const [expanded, setExpanded] = React.useState(true);

  React.useEffect(() => {
    async function getpokemon() {
      const res = await apiFilipe.get();
      console.log(res.data.results);
      setPoke(res.data.results);
    }
    getpokemon();
  }, [pokeSelected]);

  const _goBack = () => alert("Tem certeza que deseja sair da pagina?");

  const handlePress = () => setExpanded(!expanded);

  async function selectPokemon(id) {
    const res = await apiFilipe.get('/1/')
    console.log(res.data.sprites)
    setPokeSelected(res.data)
  }

  async function getpokemon(id) {
    const res = await apiFilipe.get(`/${id}`)
    setPokeSelected(res.data)
    setVisible(!visible);
    console.log(pokeSelected)
  };

  return (
    <View style={{ marginBottom: 80, backgroundColor: '#7B68EE' }}>
      <StatusBar backgroundColor="#000" />
      <Appbar.Header>
        <Appbar.Content title="Lista de Pokemons" subtitle="Pokemons" />
      </Appbar.Header>
      <FlatList
        keyExtractor={poke => poke.nome}
        data={poke}
        renderItem={({ item, index }) => {
          console.log(index)
          return (
            <List.Accordion
              onPress={() => selectPokemon(item.id)}
              title={item.name}
              left={(props) => <Avatar.Image size={70} style={{ backgroundColor: '#000' }} source={{ uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png` }} />}
            >
              <List.Item title={item.name} />
              <List.Item title={item.url} />
              <Card.Cover source={{ uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png` }} />

            </List.Accordion>
          );
        }}
      />
    </View>
  );
};