import { useEffect, useState } from "react"
import { TextInput, StyleSheet, Button } from "react-native"
import { getNote, saveNote } from "../services/noteServices"

type Props = {
    noteId: string | undefined
}

const NoteTakingInput: React.FC<Props> = ({ noteId }) => {

    const [text, setText] = useState<string>("")

    useEffect(() => {
        if (noteId) {
            getNote(noteId).then(result => setText(result?.text ?? ""))
        }
    }, [])

    const saveNoteHandler = () => {
        saveNote(text, noteId)
    }

    return (
        <>
            <TextInput
                multiline={true}
                value={text}
                style={styles.textInputStyling}
                onChangeText={setText}
                autoFocus={true}
            />

            <Button
                title='Save note'
                onPress={saveNoteHandler}
            />
        </>
    )

}

const styles = StyleSheet.create({
    textInputStyling: {
        backgroundColor: "yellow",
        width: "100%",
        height: 300,
        fontSize: 20,
        paddingHorizontal: 20,
        paddingTop: 30,
        paddingBottom: 20
    }
})

export default NoteTakingInput