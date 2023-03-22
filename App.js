import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useFonts } from 'expo-font'; 
import HomeScreen from "./details/HomeScreen";
import DetailScreen from "./details/DetailScreen";
import ProfileScreen from "./details/ProfileScreen";

const Stack = createStackNavigator();


function App() { 
  const [fontsLoaded] = useFonts({
    'Roboto-Regular': require('./assets/Roboto/Roboto-Regular.ttf'),
  });
  if (!fontsLoaded) {
    return null;
  }
  
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Detail" component={DetailScreen} />
        <Stack.Screen name="Profil Mahasiswa" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
