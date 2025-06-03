import React from "react";

function Sidebar({ notes, selectedId, onSelectNote, onAddNote, onDeleteNote }) {
    return (
        <div className="sidebar">
            <button className="add-note-btn" onClick={onAddNote}>
                Ajouter une note
            </button>
            <div>
                {notes.length === 0 && <div className="notelist-empty">Aucune note</div>}
                {notes.map(note => (
                    <div
                        key={note.id}
                        className={`note-snippet${note.id === selectedId ? " selected" : ""}`}
                        style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
                    >
                        <div
                            style={{ flex: 1, cursor: "pointer" }}
                            onClick={() => onSelectNote(note.id)}
                        >
                            <div className="note-snippet-title">{note.title || "(Sans titre)"}</div>
                            <div className="note-snippet-preview">
                                {note.content.split(/\s+/).slice(0, 15).join(" ")}...
                            </div>
                        </div>
                        <button
                            className="delete-btn"
                            onClick={e => {
                                e.stopPropagation(); // Empêche le clic de sélectionner la note
                                onDeleteNote(note.id);
                            }}
                            title="Supprimer la note"
                        >
                            🗑️
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Sidebar;
