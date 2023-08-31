import React from "react";
import { Pressable } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import { useNavigation } from "@react-navigation/native";
import { Note, saveNote } from "../services/noteServices";
import { ScreenNavigationProp } from "../types";

const saveAndGoBack: React.FC<Note> = ({ id, text }) => {

    const navigation = useNavigation<ScreenNavigationProp>()

    const saveNoteAndGoBack = async () => {
        await saveNote(text, id)
        navigation.navigate("Home")
    }

    return (
        <Pressable onPress={saveNoteAndGoBack}>
            <Ionicons name="chevron-back" size={40} color="grey" />
        </Pressable>
    )
}

export default saveAndGoBack