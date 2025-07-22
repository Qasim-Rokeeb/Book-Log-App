import { useState } from "react";

export default function BookForm({ onAdd }) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [status, setStatus] = useState("To Read");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !author) return;
    onAdd({ id: Date.now(), title, author, status });
    setTitle("");
    setAuthor("");
    setStatus("To Read");
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 p-4 rounded shadow space-y-4">
      <div className="flex flex-col sm:flex-row gap-4">
        <input
          type="text"
          placeholder="Book Title"
          className="flex-1 px-4 py-2 rounded border dark:bg-gray-700"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Author"
          className="flex-1 px-4 py-2 rounded border dark:bg-gray-700"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="px-4 py-2 rounded border dark:bg-gray-700"
        >
          <option>To Read</option>
          <option>Reading</option>
          <option>Finished</option>
        </select>
      </div>
      <button
        type="submit"
        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
      >
        Add Book
      </button>
    </form>
  );
}
