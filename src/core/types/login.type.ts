export type Login = {
  username: string;
  password: string; 
}

export type User = Login & {
  id: number;
  token: string;
}

export type AuthState = {
  user: User | null;
  isLoggedIn: boolean;
}

