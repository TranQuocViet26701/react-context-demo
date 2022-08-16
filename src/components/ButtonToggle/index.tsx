import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { ThemeContext } from '../../contexts/ThemeContext';
import BookForm from '../BookForm';
import styles from './ButtonToggle.module.scss';

export interface IButtonToggleProps {}

export default function ButtonToggle(props: IButtonToggleProps) {
  const { onToggleTheme, isLightTheme, light, dark } = useContext(ThemeContext);
  const { onToggleAuth } = useContext(AuthContext);

  const theme = isLightTheme ? light : dark;

  const handleToggleTheme = () => {
    if (!onToggleTheme) return;

    onToggleTheme();
  };

  const handleToggleAuth = () => {
    if (!onToggleAuth) return;

    onToggleAuth();
  };

  return (
    <div
      className={styles.buttonToggle}
      style={{ backgroundColor: theme.ui, color: theme.syntax }}
    >
      <div className={styles.rowButton}>
        <button onClick={handleToggleTheme}>
          Change theme to {isLightTheme ? 'dark' : 'light'}
        </button>
        <button onClick={handleToggleAuth}>Auth</button>
      </div>
      <BookForm />
    </div>
  );
}
