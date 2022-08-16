import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { ThemeContext } from '../../contexts/ThemeContext';
import { AuthActionKind } from '../../reducers/authReducer';
import { ThemeActionKind } from '../../reducers/themeReducer';
import BookForm from '../BookForm';
import styles from './ButtonToggle.module.scss';

export interface IButtonToggleProps {}

export default function ButtonToggle(props: IButtonToggleProps) {
  const {
    isLightTheme,
    light,
    dark,
    dispatch: dispatchTheme,
  } = useContext(ThemeContext);
  const { isAuthenticated, dispatch: dispatchAuth } = useContext(AuthContext);

  const theme = isLightTheme ? light : dark;

  const handleToggleAuth = () => {
    dispatchAuth?.({
      type: isAuthenticated ? AuthActionKind.LOG_OUT : AuthActionKind.LOG_IN,
      payload: null,
    });
  };

  return (
    <div
      className={styles.buttonToggle}
      style={{ backgroundColor: theme.ui, color: theme.syntax }}
    >
      <div className={styles.rowButton}>
        <button
          onClick={() =>
            dispatchTheme?.({
              type: ThemeActionKind.TOGGLE_THEME,
              payload: null,
            })
          }
        >
          Change theme to {isLightTheme ? 'dark' : 'light'}
        </button>
        <button onClick={handleToggleAuth}>Auth</button>
      </div>
      <BookForm />
    </div>
  );
}
