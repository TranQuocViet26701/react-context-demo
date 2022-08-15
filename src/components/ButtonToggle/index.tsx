import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { ThemeContext } from '../../contexts/ThemeContext';

export interface IButtonToggleProps {}

export default function ButtonToggle(props: IButtonToggleProps) {
  const { onToggleTheme, isLightTheme } = useContext(ThemeContext);
  const { onToggleAuth } = useContext(AuthContext);

  const handleToggleTheme = () => {
    if (!onToggleTheme) return;

    onToggleTheme();
  };

  const handleToggleAuth = () => {
    if (!onToggleAuth) return;

    onToggleAuth();
  };

  return (
    <div>
      <button onClick={handleToggleTheme}>
        Change theme to {isLightTheme ? 'dark' : 'light'}
      </button>
      <button onClick={handleToggleAuth}>Auth</button>
    </div>
  );
}
