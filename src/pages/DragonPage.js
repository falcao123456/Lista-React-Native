import React from "react";
import { Appbar, List } from "react-native-paper";
import { ListItem, Avatar, Button, Overlay, Text } from "react-native-elements";
import { View, FlatList, StatusBar } from "react-native";

import { apiFilipe } from "../services/api";

export const DragonBall = () => {
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
  }, []);

  const _goBack = () => alert("Conheça os Pokemon");

  const handlePress = () => setExpanded(!expanded);

  /* async function toggleOverlay(id) {
    const res = await apiFilipe.get(/${id})
    setPokeSelected(res.data)
    setVisible(!visible);
  }; */

  return (
    <View>
      <StatusBar backgroundColor="#000" />
      <Appbar.Header>
        <Appbar.BackAction onPress={_goBack} />
        <Appbar.Content title="Lista Dragonball" subtitle="Guerreiros Z" />
      </Appbar.Header>
      <FlatList
        data={poke}
        renderItem={({ item }) => {
          return (
            <List.Accordion
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