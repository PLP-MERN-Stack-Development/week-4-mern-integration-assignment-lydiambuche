import React, { useState } from "react";
import { FaBold, FaItalic } from "react-icons/fa";
import { MdFormatListBulleted } from "react-icons/md";

const Journal = () => {
  const [entries, setEntries] = useState([]);
  const [selectedEntryIndex, setSelectedEntryIndex] = useState(null);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSave = () => {
    const newEntry = {
      date: new Date().toLocaleDateString(),
      title,
      content,
    };

    if (selectedEntryIndex !== null) {
      const updatedEntries = [...entries];
      updatedEntries[selectedEntryIndex] = newEntry;
      setEntries(updatedEntries);
    } else {
      setEntries([newEntry, ...entries]);
    }

    clearForm();
  };

  const handleDelete = () => {
    if (selectedEntryIndex !== null) {
      const updatedEntries = [...entries];
      updatedEntries.splice(selectedEntryIndex, 1);
      setEntries(updatedEntries);
      clearForm();
    }
  };

  const handleEdit = (index) => {
    const entry = entries[index];
    setSelectedEntryIndex(index);
    setTitle(entry.title);
    setContent(entry.content);
  };

  const clearForm = () => {
    setTitle("");
    setContent("");
    setSelectedEntryIndex(null);
  };

  return (
    <div className="flex flex-col md:flex-row h-screen p-4 bg-gray-50 text-gray-800">
      {/* Left - Entry List */}
      <div className="w-full md:w-1/3 border-r p-4 overflow-y-auto">
        <h2 className="text-xl font-semibold mb-4">My Journal</h2>
        {entries.length === 0 ? (
          <p className="text-sm text-gray-500">No entries yet.</p>
        ) : (
          entries.map((entry, index) => (
            <div
              key={index}
              className="mb-3 cursor-pointer p-2 rounded hover:bg-gray-100"
              onClick={() => handleEdit(index)}
            >
              <p className="text-sm text-gray-500">{entry.date}</p>
              <h3 className="font-bold">{entry.title}</h3>
              <p className="text-sm truncate">{entry.content}</p>
            </div>
          ))
        )}
      </div>

      {/* Right - Editor */}
      <div className="w-full md:w-2/3 p-4">
        <div className="mb-4">
          <input
            type="text"
            className="w-full p-2 border rounded mb-2"
            placeholder="Entry title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          {/* Toolbar */}
          <div className="flex space-x-2 mb-2">
            <button title="Bold"><FaBold /></button>
            <button title="Italic"><FaItalic /></button>
            <button title="Bullet List"><MdFormatListBulleted /></button>
          </div>

          <textarea
            className="w-full h-64 p-2 border rounded"
            placeholder="Start writing your thoughts..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-4">
          <button
            onClick={handleSave}
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            Save
          </button>
          {selectedEntryIndex !== null && (
            <button
              onClick={handleDelete}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            >
              Delete
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Journal;
