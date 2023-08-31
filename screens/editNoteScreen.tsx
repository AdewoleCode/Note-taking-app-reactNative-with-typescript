import React, { useLayoutEffect } from "react";
import NoteTakingInput from "../component/NoteTakingInput";
import { useRoute, useNavigation } from "@react-navigation/native";
import { EditScreenRouteProp, ScreenNavigationProp } from "../types";
import DeleteNote from "../component/DeleteNote";

const EditNoteScreen: React.FC = () => {

    const navigation = useNavigation<ScreenNavigationProp>()
    const route = useRoute<EditScreenRouteProp>()
    const noteId = route.params.noteId

    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: noteId ? "Edit Notes" : "New Notes",
            headerRight: () => (
                noteId ?
                    <DeleteNote
                        noteId={noteId}
                    /> : null
            )
        })
    }, [navigation])

    return (
        <NoteTakingInput noteId={noteId} />
    )
}


export default EditNoteScreen