import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './screens/HomeScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import EditNoteScreen from './screens/editNoteScreen';
import { RootStackParamList } from './types';
import { Button } from 'react-native/Libraries/Components/Button';
import { useNavigation } from "@react-navigation/native"
import { ScreenNavigationProp } from "./types"

const Stack = createNativeStackNavigator<RootStackParamList>()
const navigation = useNavigation<ScreenNavigationProp>()

export default function App() {

  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerTitle: "All notes",
            headerRight: () => (
              <Button
                title='New Note'
                onPress={() => navigation.navigate("EditNote")}
              />
            )
          }}
        />
        <Stack.Screen name="EditNote" component={EditNoteScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

