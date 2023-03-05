import { Login, User } from "../types/login.type";
import fetchService from '../utils/fetch-service';

const AUTH_SERVICE = {
  async login(credentials: Login) {
    const {data} = await fetchService.get("src/db/index.json");

    const users: User[] = data.users;

    const user = users.find(
      (user) =>
        user.username === credentials.username &&
        user.password === credentials.password
    );

    return user;
  },
};

export default AUTH_SERVICE;