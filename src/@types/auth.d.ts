import { AuthActionKind } from '../reducers/authReducer';

export interface AuthAction {
  type: AuthActionKind;
  payload: null;
}

export interface AuthContextType {
  isAuthenticated: boolean;
  dispatch?: React.Dispatch<AuthAction>;
}
