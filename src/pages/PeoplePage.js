import React from 'react';
import { ListItem, Avatar, Button, Overlay, Text } from 'react-native-elements'
import { View } from 'react-native';

import { apiFilipe } from '../services/api'

export const PeoplePage = () => {

  const [poke, setPoke] = React.useState([])
  const [pokeSelected, setPokeSelected] = React.useState()
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    async function getpokemon() {
      const res = await apiFilipe.get()
      console.log(res.data.results)
      setPoke(res.data.results)
    }
    getpokemon()
  }, [])

  async function toggleOverlay(id) {
    const res = await apiFilipe.get(`/${id}`)
    setPokeSelected(res.data)
    setVisible(!visible);
  };

  return (
    <View>
      {
        poke?.map((l, i) => (

          <ListItem key={i} bottomDivider onPress={toggleOverlay(1)}>
            <Avatar source={{ uri: l.avatar_url }} />
            <ListItem.Content>
              <ListItem.Title>{l.name}</ListItem.Title>
              <ListItem.Subtitle>{l.subtitle}</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>

        ))
      }
      <Overlay isVisible={visible} onBackdropPress={toggleOverlay}>
        <Text>Hello Gay!</Text>
      </Overlay>

    </View>
  );
}

