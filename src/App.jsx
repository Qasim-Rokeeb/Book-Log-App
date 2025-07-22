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
  const deleteBook = (id) => setBooks(books.filter((b) => b.id !== id));
  const updateBook = (updated) =>
    setBooks(books.map((b) => (b.id === updated.id ? updated : b)));

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-black text-gray-800 dark:text-gray-100 font-inter transition-all">
      <div className="max-w-5xl mx-auto px-4 py-10">
        <header className="flex items-center justify-between mb-8">
          <h1 className="font-poppins text-4xl font-bold tracking-tight">
            📚 Book Log
          </h1>
          <ThemeToggle />
        </header>

        <BookForm onAdd={addBook} />
        <BookList books={books} onDelete={deleteBook} onUpdate={updateBook} />
      </div>
    </div>
  );
}