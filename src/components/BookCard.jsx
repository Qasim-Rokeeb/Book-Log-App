import { motion } from "framer-motion";
import { FaTrash, FaEdit } from "react-icons/fa";
import { useState } from "react";

export default function BookCard({ book, onDelete, onUpdate }) {
  const [isEditing, setIsEditing] = useState(false);
  const [status, setStatus] = useState(book.status);

  const handleUpdate = () => {
    onUpdate({ ...book, status });
    setIsEditing(false);
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0.5 }}
      animate={{ opacity: 1 }}
      className="bg-white dark:bg-gray-800 p-4 rounded shadow space-y-2"
    >
      <h3 className="text-lg font-bold">{book.title}</h3>
      <p className="text-sm">by {book.author}</p>

      {isEditing ? (
        <>
          <select
            className="w-full px-2 py-1 rounded border dark:bg-gray-700"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option>To Read</option>
            <option>Reading</option>
            <option>Finished</option>
          </select>
          <button
            className="mt-1 bg-green-600 text-white px-3 py-1 rounded"
            onClick={handleUpdate}
          >
            Save
          </button>
        </>
      ) : (
        <p className="text-sm text-gray-500">Status: {book.status}</p>
      )}

      <div className="flex gap-2 mt-2">
        <button onClick={() => setIsEditing(!isEditing)} className="text-blue-500">
          <FaEdit />
        </button>
        <button onClick={() => onDelete(book.id)} className="text-red-500">
          <FaTrash />
        </button>
      </div>
    </motion.div>
  );
}
