export interface BookInterface {
  id: string;
  name: string;
  author: string;
}

export interface BookContextInterface {
  bookList: BookInterface[];
  addBook?: (BookInterface) => void;
  removeBook?: (string) => void;
}
