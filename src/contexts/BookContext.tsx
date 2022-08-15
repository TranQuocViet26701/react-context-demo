import { createContext, useState } from 'react';
import { v4 as uuid } from 'uuid';
import { BookContextInterface, BookInterface } from '../@types/book';

const defaultBookContext: BookContextInterface = {
  bookList: [
    {
      id: uuid(),
      name: 'Clean Code: A Handbook of Agile Software Craftsmanship',
      author: 'Robert C. Martin',
    },
    {
      id: uuid(),
      name: 'Introduction to Algorithms',
      author: 'Thomas H. Cormen',
    },
    {
      id: uuid(),
      name: 'Structure and Interpretation of Computer Programs (SICP)',
      author: 'Harold Abelson',
    },
  ],
};

export const BookContext =
  createContext<BookContextInterface>(defaultBookContext);

export interface BookContextProviderProps {
  children: React.ReactNode;
}

export default function BookContextProvider({
  children,
}: BookContextProviderProps) {
  const [bookContext, setBookContext] = useState(defaultBookContext);

  const addBook = (newBook: BookInterface) => {
    setBookContext((prev) => {
      return {
        ...prev,
        bookList: [...prev.bookList, newBook],
      };
    });
  };

  const removeBook = (id: string) => {
    const removedBookList = bookContext.bookList.filter(
      (book) => book.id !== id
    );

    setBookContext((prev) => {
      return {
        ...prev,
        bookList: [...removedBookList],
      };
    });
  };

  return (
    <BookContext.Provider value={{ ...bookContext, addBook, removeBook }}>
      {children}
    </BookContext.Provider>
  );
}
