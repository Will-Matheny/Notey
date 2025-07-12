import React, { useState } from 'react';

function App() {
  const [notes, setNotes] = useState([]);
  const [input, setInput] = useState('');

  const addNote = () => {
    if (input.trim() !== '') {
      setNotes([...notes, input]);
      setInput('');
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>📝 Notey</h1>
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        rows={5}
        cols={40}
        placeholder="Type your note here..."
      />
      <br />
      <button onClick={addNote}>Add Note</button>
      <ul>
        {notes.map((note, index) => (
          <li key={index}>
            <pre>{note}</pre>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
