export interface AuthContextInterface {
  isAuthenticated: boolean;
  onToggleAuth?: () => void;
}
