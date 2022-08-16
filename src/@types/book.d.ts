import { BookActionKind } from '../reducers/bookReducer';

export interface Book {
  id: string;
  name: string;
  author: string;
}

export interface BookAction {
  type: BookActionKind;
  payload: BookInterface | string;
}

export interface BookContextType {
  bookList: BookInterface[];
  dispatch?: React.Dispatch<BookAction>;
}
