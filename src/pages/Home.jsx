import React from "react";
import AuthDetails from "./AuthDetails";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout as logoutHandle } from "../store/auth";
import { doSignOut } from "../firebase/auth";
import { signOut } from "firebase/auth";

const Home = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    doSignOut();
    dispatch(logoutHandle());
    navigate("/login", { replace: true });
  };

  return (
    <>
      <AuthDetails />
    </>
  );
};

export default Home;
