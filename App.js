import React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';

import { Pokemon } from './src/pages/PokemonPage'
import { Digimon } from './src/pages/DigiPage'

//const Drawer = createDrawerNavigator();
function App() {
  const [index, setIndex] = React.useState(0);

  const [routes] = React.useState([
    { key: 'pokemon', title: 'Pokemon', icon: 'car' },
    { key: 'dragonball', title: 'Dragonball', icon: 'car' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    pokemon: Pokemon,
    digimon: Digimon,
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
