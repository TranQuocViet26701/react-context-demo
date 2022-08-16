import { AuthAction, AuthContextType } from '../@types/auth';

export enum AuthActionKind {
  LOG_IN = 'LOG_IN',
  LOG_OUT = 'LOG_OUT',
}

const AuthReducer = (state: AuthContextType, action: AuthAction) => {
  switch (action.type) {
    case AuthActionKind.LOG_IN:
      return {
        ...state,
        isAuthenticated: true,
      };

    case AuthActionKind.LOG_OUT:
      return {
        ...state,
        isAuthenticated: false,
      };

    default:
      return state;
  }
};

export default AuthReducer;
