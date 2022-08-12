import styles from './BookList.module.scss';

export interface BookListProps {}

export default function BookList(props: BookListProps) {
  return (
    <div className={styles.bookList}>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </div>
  );
}
