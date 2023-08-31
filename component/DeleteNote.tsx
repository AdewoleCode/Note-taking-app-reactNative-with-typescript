import React from "react"
import { Pressable } from "react-native"
import { FontAwesome } from "@expo/vector-icons"
import { deleteNote } from "../services/noteServices"
import { useNavigation } from "@react-navigation/native"
import { ScreenNavigationProp } from "../types"

type Props = {
    noteId: string | undefined
}

const navigation = useNavigation<ScreenNavigationProp>()

const DeleteNote: React.FC<Props> = ({ noteId }) => {

    const deleteNoteHandler = async () => {
        await deleteNote(noteId)
        navigation.navigate("Home")
    }

    return (
        <Pressable onPress={deleteNoteHandler}>
            <FontAwesome name="trash-o" size={40} color="orange" />
        </Pressable>
    )
}

export default DeleteNote