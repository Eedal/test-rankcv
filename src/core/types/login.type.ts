export type Login = {
  username: string;
  password: string; 
}

export type User = Login & {
  id: number;
}

export type AuthState = {
  user: User | null;
  isLoggedIn: boolean;
}

