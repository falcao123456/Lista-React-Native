import React from "react";
import { Appbar, List,Avatar,Card,Title,Paragraph, Button } from "react-native-paper";
import { ListItem, Overlay, Text } from "react-native-elements";
import { View, FlatList, StatusBar } from "react-native";

import { apiTacio} from "../services/api";

export const Digimon = () => {
  const [digi, setDigi] = React.useState([]);
  const [expanded, setExpanded] = React.useState(true);

  React.useEffect(() => {
    async function getdigimon() {
      const res = await apiTacio.get();
      console.log(res.data);
      setDigi(res.data);
    }
    getdigimon();
  }, []);


  const _goBack = () => alert("Conheça os Guerreiros Z");

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
        <Appbar.Content title="Lista Digimons" subtitle="Digimons" />
      </Appbar.Header>
      <FlatList
        data={digi}
        renderItem={({ item }) => {
          return (
            <List.Accordion
            title={item.name}
              left={(props) => <Avatar.Image size={24} source={{uri: item.img}} />}
            >
            <Card>
               
              <Card.Content>
              <Title>{item.name}</Title>
              <Paragraph>{item.level}</Paragraph>
              </Card.Content>
              <Card.Cover source={{ uri: item.img }} />
              </Card>

              
            </List.Accordion>
          );
        }}
      />
    </View>
  );
};