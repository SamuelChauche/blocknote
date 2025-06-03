import React, { useState } from 'react';
import MarkdownInput from './components/MarkdownInput';
import NoteDisplay from './components/NoteDisplay';
import Sidebar from './components/Sidebar'; 
import Header from "./components/Header";
import Footer from "./components/Footer";
import './styles.css';

function getInitialNotes() {
  const data = localStorage.getItem('notes');
  return data ? JSON.parse(data) : [];
}

function App() {
  const [notes, setNotes] = useState(getInitialNotes);
  const [selectedId, setSelectedId] = useState(notes[0]?.id || null);

  const selectedNote = notes.find(n => n.id === selectedId);

  function handleNoteChange(field, value) {
    setNotes(prev =>
      prev.map(n => n.id === selectedId ? { ...n, [field]: value } : n)
    );
  }

  function handleSave() {
    localStorage.setItem('notes', JSON.stringify(notes));
  }

  function handleAddNote() {
    const newNote = {
      id: Date.now(),
      title: '',
      content: '',
    };
    setNotes(prev => [newNote, ...prev]);
    setSelectedId(newNote.id);
  }

  function handleSelectNote(id) {
    setSelectedId(id);
  }

  function handleDeleteNote(id) {
    setNotes(prev => prev.filter(n => n.id !== id));
    if (selectedId === id) {
      const rest = notes.filter(n => n.id !== id);
      setSelectedId(rest[0]?.id || null);
    }
  }

  return (
    <div className="app-container">
      <Header />
      <div className="content-wrapper">
        <Sidebar
          notes={notes}
          selectedId={selectedId}
          onSelectNote={handleSelectNote}
          onAddNote={handleAddNote}
          onDeleteNote={handleDeleteNote}
        />
        <div className="main">
          {selectedNote ? (
            <>
              <NoteDisplay markdown={selectedNote.content} title={selectedNote.title} />
              <MarkdownInput
                title={selectedNote.title}
                content={selectedNote.content}
                onTitleChange={t => handleNoteChange('title', t)}
                onContentChange={c => handleNoteChange('content', c)}
                onSave={handleSave}
              />
            </>
          ) : (
            <div className="nodisplay">Aucune note sélectionnée</div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
