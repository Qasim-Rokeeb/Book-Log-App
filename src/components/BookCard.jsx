import { motion } from "framer-motion";
import { FaTrash, FaEdit } from "react-icons/fa";
import { useState } from "react";

export default function BookCard({ book, onDelete, onUpdate }) {
  const [editing, setEditing] = useState(false);
  const [status, setStatus] = useState(book.status);

  const save = () => {
    onUpdate({ ...book, status });
    setEditing(false);
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.2 }}
      className="group relative p-5 rounded-2xl bg-white/70 dark:bg-gray-800/60 backdrop-blur-md shadow-md hover:shadow-xl transition"
    >
      <h3 className="text-lg font-bold truncate text-gray-900 dark:text-gray-100">
        {book.title}
      </h3>
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">by {book.author}</p>

      {editing ? (
        <>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="w-full mb-2 px-2 py-1 rounded-md border border-gray-300 dark:border-gray-600 dark:bg-gray-700/60 text-sm"
          >
            <option>To Read</option>
            <option>Reading</option>
            <option>Finished</option>
          </select>
          <button
            onClick={save}
            className="w-full bg-green-600 text-white text-sm rounded-md py-1 hover:bg-green-700 transition"
          >
            Save
          </button>
        </>
      ) : (
        <p className="text-sm font-medium text-indigo-600 dark:text-indigo-400 mb-3">
          {book.status}
        </p>
      )}

      <div className="absolute top-3 right-3 flex gap-2 opacity-60 group-hover:opacity-100 transition">
        <button onClick={() => setEditing(!editing)} className="text-blue-500 hover:text-blue-700">
          <FaEdit />
        </button>
        <button onClick={() => onDelete(book.id)} className="text-red-500 hover:text-red-700">
          <FaTrash />
        </button>
      </div>
    </motion.div>
  );
}