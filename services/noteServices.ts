import AsyncStorage from "@react-native-async-storage/async-storage";

export type Note = {
    id: string;
    text: string;
};

export type AllNoteFromStore = {
    notes: Array<Note>;
};

const storeReferenceKey = "Notes_store"

export const getAllNote = async () => {
    const allNote = await AsyncStorage.getItem(storeReferenceKey)
    if (allNote) {
        return JSON.parse(allNote) as AllNoteFromStore
    }
    return { notes: [] }
}

export const getNote = async (id: string) => {
    const allNotes = await getAllNote()
    const singleNote = allNotes.notes.find(note => note.id === id)
    return singleNote
}

export const saveNote = async (text: string) => {
    const newNote = { text: text, id: Date.now().toString() }
    const allNotes = await getAllNote()
    const newNoteArray = [...allNotes.notes, newNote]
    await AsyncStorage.setItem(storeReferenceKey, JSON.stringify(newNoteArray))
}