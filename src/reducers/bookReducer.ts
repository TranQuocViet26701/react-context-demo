import { v4 as uuid } from 'uuid';
import { Book, BookAction, BookContextType } from '../@types/book';

export enum BookActionKind {
  ADD_BOOK = 'ADD_BOOK',
  REMOVE_BOOK = 'REMOVE_BOOK',
}

const BookReducer = (state: BookContextType, action: BookAction) => {
  console.log(action.type);

  switch (action.type) {
    case BookActionKind.ADD_BOOK:
      const { name, author } = action.payload as Book;

      return {
        bookList: [
          ...state.bookList,
          {
            id: uuid(),
            name,
            author,
          },
        ],
      };

    case BookActionKind.REMOVE_BOOK:
      const removedId = action.payload as string;

      return {
        bookList: state.bookList.filter((b) => b.id !== removedId),
      };

    default:
      return state;
  }
};

export default BookReducer;
