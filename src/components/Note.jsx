import React, { useEffect, useState } from "react";

const Note = ({ id, title, text, handleDelete, handleEdit }) => {
  const [editMode, setEditMode] = useState(false);
  const [newTitle, setNewTitle] = useState(title);
  const [newText, setNewText] = useState(text);

  //   useEffect(() => {
  //     setNewTitle(title);
  //     setNewText(text);
  //   }, [text, title]);

  const edit = (e) => {
    if (editMode) {
      e.stopPropagation();
      setEditMode(false);
      handleEdit(e, { id, title: newTitle, text: newText });
    } else setEditMode(true);
  };

  return (
    <div className="note">
      <div className="note-header">
        {editMode ? (
          <input
            id="note-title-input"
            value={newTitle}
            onChange={(e) => setNewTitle(e.currentTarget.value)}
          />
        ) : (
          <p id="note-title">{title}</p>
        )}
        <div>
          <button className="note-edit" onClick={edit}>
            <i className="fa-solid fa-pen-to-square"></i>
          </button>
          <button className="note-delete" onClick={(e) => handleDelete(e, id)}>
            <i className="fa-solid fa-trash"></i>
          </button>
        </div>
      </div>
      {editMode ? (
        <input
          id="note-textarea"
          value={newText}
          onChange={(e) => setNewText(e.currentTarget.value)}
        />
      ) : (
        <p id="note-text">{text}</p>
      )}
    </div>
  );
};

export default Note;
