import { useContext, useState } from 'react';
import { BookContext } from '../../contexts/BookContext';
import { BookActionKind } from '../../reducers/bookReducer';
import styles from './BookForm.module.scss';

export default function BookForm() {
  const { dispatch } = useContext(BookContext);

  const [name, setName] = useState('');
  const [author, setAuthor] = useState('');

  const handleAddBook = () => {
    if (!name || !author) return;

    dispatch?.({
      type: BookActionKind.ADD_BOOK,
      payload: {
        name,
        author,
      },
    });
  };

  return (
    <div className={styles.form}>
      <input
        type="text"
        value={name}
        className={styles.name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name of book"
      />
      <input
        type="text"
        value={author}
        className={styles.author}
        onChange={(e) => setAuthor(e.target.value)}
        placeholder="Author"
      />
      <button onClick={handleAddBook}>Add book</button>
    </div>
  );
}
