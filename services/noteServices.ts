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

export const saveNote = async (text: string, noteId?: string) => {
    const allNotes = await getAllNote()
    if (noteId) {
        const noteIndex = allNotes.notes.findIndex(note => note.id === noteId)
        allNotes.notes.splice(noteIndex, 1, { id: noteId, text: text })
    } else {
        allNotes?.notes.push({ id: Date.now().toString(), text: text })
    }

    await AsyncStorage.setItem(storeReferenceKey, JSON.stringify(allNotes))
}