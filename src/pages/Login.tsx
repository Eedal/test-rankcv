import { Box, Paper } from "@mui/material";
import React from "react";
import { LoginForm } from "../components/login/LoginForm";

const Login = () => {
  return (
    <>
      <Box
        sx={{
          background: "black",
          height: "100vh",
          backgroundImage: "url('public/assets/img/background.jpeg')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        margin: "-8px",

          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <LoginForm />
      </Box>
    </>
  );
};

export default Login;
