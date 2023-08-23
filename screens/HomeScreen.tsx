import { Text, Button, View } from "react-native"
import { useNavigation, useFocusEffect } from "@react-navigation/native"
import { ScreenNavigationProp } from "../types"
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from "react";

const HomeScreen: React.FC = () => {

    const [noteResult, setNoteResult] = useState<string>("")

    useFocusEffect(() => {
        getNote().then(result => setNoteResult(result ?? ""))
    })

    const getNote = async () => {
        return await AsyncStorage.getItem('Notes')
    }

    const navigation = useNavigation<ScreenNavigationProp>()
    return (
        <>
            <View>
                <Text>{noteResult}</Text>
            </View>
            <Button
                title='New Note'
                onPress={() => navigation.navigate("EditNote")}
            />
        </>
    )
}


export default HomeScreen