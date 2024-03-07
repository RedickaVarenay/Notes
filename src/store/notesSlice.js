import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  notes: [],
};

export const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    setNotes: (state, action) => {
      state.notes = action.payload;
    },
    addNote: (state, action) => {
      state.notes.push(action.payload);
    },
    deleteNotes: (state, action) => {
      state.notes = state.notes.filter((note) => note.id !== action.payload);
    },
    editNotes: (state, action) => {
      const noteIndex = state.notes.findIndex(
        (el) => action.payload.id === el.id
      );
      state.notes.splice(noteIndex, 1, action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addNote, editNotes, deleteNotes, setNotes } = notesSlice.actions;

export default notesSlice.reducer;
