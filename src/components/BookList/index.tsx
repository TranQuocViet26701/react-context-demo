import { useContext } from 'react';
import { BookContext } from '../../contexts/BookContext';
import { ThemeContext } from '../../contexts/ThemeContext';
import BookDetail from '../BookDetail';
import styles from './BookList.module.scss';

export default function BookList() {
  const themeContext = useContext(ThemeContext);
  const { bookList } = useContext(BookContext);
  const { isLightTheme, light, dark } = themeContext;
  const theme = isLightTheme ? light : dark;

  return (
    <div
      className={styles.bookList}
      style={{ backgroundColor: theme.ui, color: theme.syntax }}
    >
      {bookList.length === 0 ? (
        <div className={styles.alert}>No book to show</div>
      ) : (
        <ul>
          {bookList.map((b) => (
            <BookDetail key={b.id} {...b} />
          ))}
        </ul>
      )}
    </div>
  );
}
