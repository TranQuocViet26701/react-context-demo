import { useContext } from 'react';
import { BookContext } from '../../contexts/BookContext';
import styles from './BookDetail.module.scss';

export interface BookDetailProps {
  id: string;
  name: string;
  author: string;
}

export default function BookDetail({ id, name, author }: BookDetailProps) {
  const { removeBook } = useContext(BookContext);

  const handleRemoveBook = () => {
    if (!removeBook) return;

    removeBook(id);
  };

  return (
    <li onClick={handleRemoveBook} className={styles.bookDetail}>
      <div className={styles.name}>{name}</div>
      <div className={styles.author}>{author}</div>
    </li>
  );
}
