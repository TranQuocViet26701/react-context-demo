import { useContext } from 'react';
import { BookContext } from '../../contexts/BookContext';
import { ThemeContext } from '../../contexts/ThemeContext';
import styles from './BookList.module.scss';

export interface BookListProps {}

export default function BookList(props: BookListProps) {
  const themeContext = useContext(ThemeContext);
  const { bookList, addBook, removeBook } = useContext(BookContext);
  const { isLightTheme, light, dark } = themeContext;
  const theme = isLightTheme ? light : dark;

  return (
    <div
      className={styles.bookList}
      style={{ backgroundColor: theme.ui, color: theme.syntax }}
    >
      <ul>
        {bookList.map((b) => (
          <li key={b.id}>
            <div className={styles.name}>{b.name}</div>
            <div className={styles.author}>{b.author}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
