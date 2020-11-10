import React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';

import { Pokemon } from './src/pages/PokemonPage'
import { DragonBall } from './src/pages/DragonPage'

//const Drawer = createDrawerNavigator();
function App() {
  const [index, setIndex] = React.useState(0);

  const [routes] = React.useState([
    { key: 'pokemon', title: 'Pokemon', icon: 'queue-music' },
    { key: 'dragonball', title: 'Dragonball', icon: 'queue-music' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    pokemon: Pokemon,
    dragonball: DragonBall,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  )
}



export default App;
