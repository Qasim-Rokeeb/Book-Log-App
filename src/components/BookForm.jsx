import { useState } from "react";

export default function BookForm({ onAdd }) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [status, setStatus] = useState("To Read");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !author.trim()) return;
    onAdd({ id: Date.now(), title, author, status });
    setTitle("");
    setAuthor("");
    setStatus("To Read");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col md:flex-row items-end gap-4 p-5 rounded-2xl bg-white/70 dark:bg-gray-800/50 backdrop-blur-md shadow-md"
    >
      <div className="flex-1 w-full">
        <label className="block text-sm font-medium mb-1">Title</label>
        <input
          type="text"
          placeholder="Book title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700/60 focus:ring-2 focus:ring-indigo-500 outline-none"
        />
      </div>

      <div className="flex-1 w-full">
        <label className="block text-sm font-medium mb-1">Author</label>
        <input
          type="text"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700/60 focus:ring-2 focus:ring-indigo-500 outline-none"
        />
      </div>

      <div className="w-full md:w-auto">
        <label className="block text-sm font-medium mb-1">Status</label>
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="w-full md:w-40 px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700/60 focus:ring-2 focus:ring-indigo-500 outline-none"
        >
          <option>To Read</option>
          <option>Reading</option>
          <option>Finished</option>
        </select>
      </div>

      <button
        type="submit"
        className="w-full md:w-auto px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
      >
        Add Book
      </button>
    </form>
  );
}