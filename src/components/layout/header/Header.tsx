import { useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

import { AppBar, Button, IconButton, Toolbar, Typography } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";

import { useAppSelector } from "../../../hooks";
import { useDispatch } from "react-redux";
import {
  logoutSuccess,
  selectIsLoggedIn,
} from "../../../features/auth/authSlice";

const Header = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useAppSelector(selectIsLoggedIn);
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logoutSuccess());
  };

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [isAuthenticated]);

  return (
    <AppBar position="fixed" color="inherit">
      <Toolbar sx={{ marginX: "45px" }}>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Rick and Morty
        </Typography>
        <NavLink
          to="/home"
          style={({ isActive }) => {
            return {
              textDecoration: isActive ? "underline" : "none",
            };
          }}
        >
          <Button color="inherit">Home</Button>
        </NavLink>
        <NavLink
          to="/episodes"
          style={({ isActive }) => {
            return {
              textDecoration: isActive ? "underline" : "none",
            };
          }}
        >
          <Button color="inherit">Episodes</Button>
        </NavLink>
        <NavLink
          to="/location"
          style={({ isActive }) => {
            return {
              textDecoration: isActive ? "underline" : "none",
            };
          }}
        >
          <Button color="inherit">Locations</Button>
        </NavLink>

        <IconButton
          onClick={() => handleLogout()}
          size="large"
          sx={{ color: "inherit" }}
        >
          <LogoutIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
