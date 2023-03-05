import { Box, Paper } from "@mui/material";
import React from "react";
import { LoginForm } from "../components/login/LoginForm";


const Login = () => {
  return (
    <>
      <Box
        sx={{
          height: "100vh",
          backgroundImage: "url('https://i.imgur.com/x54SV0y.jpg')",
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
