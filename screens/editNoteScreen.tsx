import React from "react";
import NoteTakingInput from "../component/NoteTakingInput";
import { useRoute } from "@react-navigation/native";
import { EditScreenRouteProp } from "../types";

const EditNoteScreen: React.FC = () => {

    const route = useRoute<EditScreenRouteProp>()
    const noteId = route.params.noteId

    return (
        <NoteTakingInput noteId={noteId}/>
    )
}


export default EditNoteScreen