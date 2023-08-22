import { Text, Button } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { ScreenNavigationProp } from "../types"

const HomeScreen: React.FC = () => {

    const navigation = useNavigation<ScreenNavigationProp>()
    return (
        <>
            <Text>HOME SCREEN</Text>
            <Button
                title='New Note'
                onPress={() => navigation.navigate("EditNote")}
            />
        </>
    )
}


export default HomeScreen