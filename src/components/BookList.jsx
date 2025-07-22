import BookCard from "./BookCard";

export default function BookList({ books, onDelete, onUpdate }) {
  const grouped = {
    "To Read": books.filter((b) => b.status === "To Read"),
    "Reading": books.filter((b) => b.status === "Reading"),
    "Finished": books.filter((b) => b.status === "Finished"),
  };

  return (
    <div className="mt-8 space-y-6">
      {Object.entries(grouped).map(([status, books]) => (
        <div key={status}>
          <h2 className="text-xl font-semibold mb-2">{status}</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {books.map((book) => (
              <BookCard
                key={book.id}
                book={book}
                onDelete={onDelete}
                onUpdate={onUpdate}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
