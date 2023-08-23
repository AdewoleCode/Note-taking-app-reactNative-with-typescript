import { useState } from "react"
import { TextInput, StyleSheet, Button } from "react-native"

type Props = {
    saveNote: (text: string) => void
}

const NoteTakingInput: React.FC<Props>  = ({saveNote}) => {

    const [text, setText] = useState<string>("")

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
                onPress={() => saveNote(text)}
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