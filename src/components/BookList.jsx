import BookCard from "./BookCard";

const statuses = ["To Read", "Reading", "Finished"];

export default function BookList({ books, onDelete, onUpdate }) {
  return (
    <section className="mt-10 space-y-10">
      {statuses.map((status) => {
        const filtered = books.filter((b) => b.status === status);
        return (
          <div key={status}>
            <h2 className="font-poppins text-2xl font-semibold mb-4 text-indigo-600 dark:text-indigo-400">
              {status} <span className="text-base font-normal">({filtered.length})</span>
            </h2>
            {filtered.length ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filtered.map((book) => (
                  <BookCard key={book.id} book={book} onDelete={onDelete} onUpdate={onUpdate} />
                ))}
              </div>
            ) : (
              <p className="text-sm text-gray-500 dark:text-gray-400 italic">
                No books in this category yet.
              </p>
            )}
          </div>
        );
      })}
    </section>
  );
}