import { useState } from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native"
import { getAllNote, Note } from "../services/noteServices";
import { useFocusEffect } from "@react-navigation/native";

const SavedNoteList = () => {
    const [noteResults, setNoteResults] = useState<Note[]>([])

    useFocusEffect(() => {
        getAllNote().then(result => setNoteResults(result.notes))
    })

    return (
        <View style={styles.noteWrapper}>
            <ScrollView>
                {
                    noteResults.map(note => {
                        return (
                            <View style={styles.noteBox}>
                                <Text
                                    style={styles.note}
                                    key={note.id}
                                >
                                    {note.text.length === 0 ? "(blank note)" : note.text}
                                </Text>
                            </View>
                        )
                    })
                }
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    noteWrapper: {
        width: "100%",
        flex: 1,
        height: 80,
    },
    noteBox: {
        borderBottomColor: "#e6e6e6",
        borderBottomWidth: 1,
        width: "90%",
        alignSelf: "center",
        flex: 1,
        justifyContent: "center",
    },
    note: {
        paddingVertical: 20,
        width: "100%",
        fontSize: 16,
    }
})


export default SavedNoteList