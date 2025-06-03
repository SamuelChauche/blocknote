import React from 'react';
import Showdown from 'showdown';

const converter = new Showdown.Converter();

function NoteDisplay({ title, markdown }) {
    const html = converter.makeHtml(markdown || "");

    return (
        <div style={{ marginBottom: 18 }}>
            <div className="note-display">
                {title || "(Sans titre)"}
            </div>
            <div className="markdown-html" dangerouslySetInnerHTML={{ __html: html }} />
        </div>
    );
}

export default NoteDisplay;
