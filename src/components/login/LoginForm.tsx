import { Box, Button, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import useLogin from "../../core/hooks/useLogin";
import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../../features/auth/authSlice";

const Form = styled("form")(() => ({
  display: "flex",
  flexDirection: "column",
  rowGap: 10,
}));

const FormContainer = styled(Box)(() => ({
  width: 300,
  border: "0px solid #ccc",
  padding: 3,
  background: "#e7d9c100",
}));

export const LoginForm = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const { validateForm, onSubmit } = useLogin();

  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const [error, setError] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const username = usernameRef?.current?.value || "";
    const password = passwordRef?.current?.value || "";

    if (!validateForm({ username, password })) {
      setError(true);
      return;
    }

    const user = await onSubmit({ username, password });

    setError(!user);

    if (user) {
      localStorage.setItem(
        "user",
        JSON.stringify({ id: user.id, username: user.username })
      );
      dispatch(loginSuccess(user));

      navigate("/home");
    }
  };

  return (
    <FormContainer>
      <Typography variant="h4" marginBottom={1} align="center">
        Login
      </Typography>
      <Form onSubmit={(e) => handleSubmit(e)}>
        <TextField
          error={false}
          label="Username"
          name="username"
          inputRef={usernameRef}
          variant="outlined"
          required
        />
        <TextField
          error={error}
          helperText={error ? "Invalid credentials" : ""}
          label="Password"
          name="password"
          inputRef={passwordRef}
          variant="outlined"
          required
          type="password"
        />

        <Button variant="outlined" type="submit">
          Ingresar
        </Button>
      </Form>
    </FormContainer>
  );
};
