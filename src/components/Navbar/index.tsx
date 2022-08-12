import styles from './Navbar.module.scss';

export default function Navbar() {
  return (
    <nav className={styles.navBar}>
      <h1>Context App</h1>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}
