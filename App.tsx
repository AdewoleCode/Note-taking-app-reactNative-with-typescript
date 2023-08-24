import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './screens/HomeScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import EditNoteScreen from './screens/editNoteScreen';
import { RootStackParamList } from './types';
import NewNoteButtonIcon from './component/NewNoteButtonIcon';

const Stack = createNativeStackNavigator<RootStackParamList>()

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
            headerRight: () => (<NewNoteButtonIcon />)
          }}
        />
        <Stack.Screen name="EditNote" component={EditNoteScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

