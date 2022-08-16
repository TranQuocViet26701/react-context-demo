import { createContext, useReducer } from 'react';
import { v4 as uuid } from 'uuid';
import { BookContextType } from '../@types/book';
import BookReducer from '../reducers/bookReducer';

const initialState: BookContextType = {
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

export const BookContext = createContext<BookContextType>(initialState);

export interface BookContextProviderProps {
  children: React.ReactNode;
}

export default function BookContextProvider({
  children,
}: BookContextProviderProps) {
  const { Provider } = BookContext;
  const [state, dispatch] = useReducer(BookReducer, initialState);

  return <Provider value={{ ...state, dispatch }}>{children}</Provider>;
}
