import { useContext } from 'react';
import { Book } from '../../@types/book';
import { BookContext } from '../../contexts/BookContext';
import { BookActionKind } from '../../reducers/bookReducer';
import styles from './BookDetail.module.scss';

export default function BookDetail({ id, name, author }: Book) {
  const { dispatch } = useContext(BookContext);

  return (
    <li
      onClick={() =>
        dispatch?.({ type: BookActionKind.REMOVE_BOOK, payload: id })
      }
      className={styles.bookDetail}
    >
      <div className={styles.name}>{name}</div>
      <div className={styles.author}>{author}</div>
    </li>
  );
}
