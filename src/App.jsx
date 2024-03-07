import { useEffect } from "react";
import "./App.css";
import Note from "./components/Note";
import { useSelector, useDispatch } from "react-redux";
import { addNote, deleteNotes, editNotes, setNotes } from "./store/notesSlice";
import { localStorageUtil } from "./utils/localStorageUtil";
import { guidGenerator } from "./utils/guidGenerator";

function App() {
  const notes = useSelector((state) => state.notes.notes);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setNotes(localStorageUtil.getNotes() || []));
  }, []);

  useEffect(() => {
    localStorageUtil.setNotes(notes);
  }, [notes]);

  const handleAddNote = () => {
    dispatch(
      addNote({ id: guidGenerator(), title: "Заголовок", text: "Ваш текст" })
    );
  };

  const handleDelete = (e, id) => {
    e.stopPropagation();
    dispatch(deleteNotes(id));
  };

  const handleEdit = (e, note) => {
    e.stopPropagation();
    dispatch(editNotes(note));
  };

  return (
    <>
      <div className="container">
        <div className="header">
          <h1>Notes App</h1>
          <button className="note-add" onClick={handleAddNote} type="button">
            <i className="fa-solid fa-plus"></i>
          </button>
        </div>
        <div className="notes">
          {notes.map((note) => {
            return (
              <Note
                key={note.id}
                id={note.id}
                title={note.title}
                text={note.text}
                handleDelete={handleDelete}
                handleEdit={handleEdit}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
