import * as React from 'react';
import {Button, View, Text} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {ResourceScreen} from './pages/Resources';
import {PrizeScreen} from './pages/Prizes';
import {HomeScreen} from './pages/Home';
import {Prize2Screen} from './pages/Prizes2';
import RNConfigReader from 'rn-config-reader';

// function HomeScreen({navigation}) {
//   return (
//     <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//       <Button
//         onPress={() => navigation.navigate('Notifications')}
//         title="Go to notifications"
//       />
//       <Button onPress={() => navigation.toggleDrawer()} title="Toggle" />
//     </View>
//   );
// }

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        drawerPosition="right"
        screenOptions={{headerShown: false}}>
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Prizes" component={PrizeScreen} />
        <Drawer.Screen name="Prizes 2" component={Prize2Screen} />
        <Drawer.Screen name="Resources" component={ResourceScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
