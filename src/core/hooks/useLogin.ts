import AUTH_SERVICE from "../services/auth";
import { Login } from "../types/login.type";


const useLogin = () => {
  const validateForm = (credentials: Login) => {
    const { username, password } = credentials;

    return username && password;
  };

  const onSubmit = async (credentials: Login) => {
    const user = await AUTH_SERVICE.login(credentials);
    return user;
  };

  return {
    validateForm,
    onSubmit,
  };
};

export default useLogin;
