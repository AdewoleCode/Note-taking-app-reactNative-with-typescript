import { useEffect, useState, useLayoutEffect } from "react"
import { TextInput, StyleSheet, Button } from "react-native"
import { getNote, saveNote } from "../services/noteServices"
import { useNavigation } from "@react-navigation/native"
import { ScreenNavigationProp } from "../types"

type Props = {
    noteId: string | undefined
}

const NoteTakingInput: React.FC<Props> = ({ noteId }) => {

    const [text, setText] = useState<string>("")
    const navigation = useNavigation<ScreenNavigationProp>()

    useLayoutEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <Button
                    title="Go back"
                    onPress={saveNoteAndGoBack}
                />
            )
        })
    }, [navigation, text, noteId])

    const saveNoteAndGoBack = async () => {
        await saveNote(text, noteId)
        navigation.navigate("Home")
    }

    useEffect(() => {
        if (noteId) {
            getNote(noteId).then(result => setText(result?.text ?? ""))
        }
    }, [])

    return (
        <>
            <TextInput
                multiline={true}
                value={text}
                style={styles.textInputStyling}
                onChangeText={setText}
                autoFocus={true}
            />
        </>
    )
}

const styles = StyleSheet.create({
    textInputStyling: {
        backgroundColor: "yellow",
        width: "100%",
        height: 600,
        flex: 1,
        fontSize: 20,
        paddingHorizontal: 20,
        paddingTop: 30,
        paddingBottom: 20
    }
})

export default NoteTakingInput