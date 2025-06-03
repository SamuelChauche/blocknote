import React, { useRef, useEffect } from "react";

function MarkdownInput({ title, content, onTitleChange, onContentChange, onSave }) {
    const textareaRef = useRef(null);

    useEffect(() => {
        const ta = textareaRef.current;
        if (ta) {
            ta.style.height = "auto";   // Réinitialise avant de recalculer
            ta.style.height = ta.scrollHeight + "px";
        }
    }, [content]);
    return (
        <div className="note-editor">
            <input
                className="editor-title-input"
                type="text"
                value={title}
                onChange={e => onTitleChange(e.target.value)}
                placeholder="Titre de la note"
            />
            <textarea
                className="editor-textarea"
                value={content}
                onChange={e => onContentChange(e.target.value)}
                placeholder="Contenu en markdown..."
            />
            <button className="save-btn" onClick={onSave}>Sauvegarder</button>
        </div>
    );
}

export default MarkdownInput;
