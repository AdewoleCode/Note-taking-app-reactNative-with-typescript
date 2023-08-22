import React from "react";
import NoteTakingInput from "../component/NoteTakingInput";
import AsyncStorage from '@react-native-async-storage/async-storage';

const EditNoteScreen: React.FC = () => {

    const saveNote = async (text: string) => {
        AsyncStorage.setItem('Notes', text)
    }

    return (
        <NoteTakingInput saveNote={saveNote} />
    )
}


export default EditNoteScreen