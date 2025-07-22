import { useEffect, useState } from "react";
import BookForm from "./components/BookForm";
import BookList from "./components/BookList";
import ThemeToggle from "./components/ThemeToggle";

export default function App() {
  const [books, setBooks] = useState(() => {
    const stored = localStorage.getItem("book-log");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem("book-log", JSON.stringify(books));
  }, [books]);

  const addBook = (book) => setBooks([...books, book]);

  const deleteBook = (id) =>
    setBooks(books.filter((book) => book.id !== id));

  const updateBook = (updatedBook) =>
    setBooks(books.map((book) => (book.id === updatedBook.id ? updatedBook : book)));

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100 transition-all">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">📚 Book Log</h1>
          <ThemeToggle />
        </div>
        <BookForm onAdd={addBook} />
        <BookList books={books} onDelete={deleteBook} onUpdate={updateBook} />
      </div>
    </div>
  );
}
