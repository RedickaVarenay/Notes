export const localStorageUtil = {
  getNotes: () => {
    return localStorage.getItem("notes")
      ? JSON.parse(localStorage.getItem("notes"))
      : localStorage.clear();
  },
  setNotes: (notes) => {
    localStorage.setItem("notes", JSON.stringify(notes));
  },
};
