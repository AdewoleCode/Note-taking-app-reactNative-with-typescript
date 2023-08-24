import React from "react";
import { FontAwesome } from "@expo/vector-icons"
import { Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ScreenNavigationProp } from "../types";

const NewNoteButtonIcon: React.FC = () => {
    const navigation = useNavigation<ScreenNavigationProp>()
    return (
        <Pressable
            onPress={() => navigation.navigate("EditNote")}
        >
            <FontAwesome
                name="pencil-square-o"
                size={35}
                color="#ffb713"
            />
        </Pressable>
    )
}

export default NewNoteButtonIcon;