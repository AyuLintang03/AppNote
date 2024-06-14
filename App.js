import React, { useState } from 'react';
import Home from './src/screen/Home';
import AddNote from './src/screen/addNote';
import EditNote from './src/screen/editNote';

const CurrentPageWidget = ({
  currentPage,
  noteList,
  setCurrentPage,
  addNote,
  editNote,
  setSelectedNote,
  deleteNote,
  selectedNote,
}) => {
  switch (currentPage) {
    case 'home':
      return <Home noteList={noteList} setCurrentPage={setCurrentPage} setSelectedNote={setSelectedNote} deleteNote={deleteNote} />;
    case 'add':
      return <AddNote setCurrentPage={setCurrentPage} addNote={addNote} />;
    case 'edit':
      return <EditNote editNote={editNote} selectedNote={selectedNote} setCurrentPage={setCurrentPage} />;
    default:
      return <Home />;
  }
};

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [noteList, setNoteList] = useState([
    {
      id: 1,
      title: 'Note pertama',
      desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
    },
  ]);
  const [selectedNote, setSelectedNote] = useState(null);

  const addNote = (title, desc) => {
    const id = noteList.length > 0 ? noteList[noteList.length - 1].id + 1 : 1;
    setNoteList([
      ...noteList,
      {
        id,
        title: title,
        desc: desc,
      },
    ]);
  };

  const editNote = (id, title, desc) => {
    const newNoteList = noteList.map((note) => {
      if (note.id === id) {
        return { ...note, title, desc };
      }
      return note;
    });
    setNoteList(newNoteList);
    setCurrentPage('home'); // Navigate back to the home screen after editing
  };

  const deleteNote = (id) => {
    const newNoteList = noteList.filter((note) => note.id !== id);
    setNoteList(newNoteList);
  };

  return (
    <CurrentPageWidget
      currentPage={currentPage}
      noteList={noteList}
      setCurrentPage={setCurrentPage}
      addNote={addNote}
      editNote={editNote}
      setSelectedNote={setSelectedNote}
      deleteNote={deleteNote}
      selectedNote={selectedNote}
    />
  );
};

export default App;
