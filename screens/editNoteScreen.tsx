import React from "react";
import NoteTakingInput from "../component/NoteTakingInput";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRoute } from "@react-navigation/native";
import { EditScreenRouteProp } from "../types";


const EditNoteScreen: React.FC = () => {

    const route = useRoute<EditScreenRouteProp>()
    const noteId = route.params.noteId

    const saveNote = async (text: string) => {
        AsyncStorage.setItem('Notes', text)
    }

    return (
        <NoteTakingInput saveNote={saveNote} noteId={noteId}/>
    )
}


export default EditNoteScreen