import React, { useRef } from "react";
import { CssBaseline } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import useStyles from "./styles";

import Actors from "./Actors/Actors";
import NavBar from "./NavBar/NavBar";
import Movies from "./Movies/Movies";
import MovieInformation from "./MovieInformation/MovieInformation";
import Profile from "./Profile/Profile";
import useAlan from "../alan-ai/Alan";

const App = () => {
  const classes = useStyles();
  const alanBtnContainer = useRef();

  useAlan();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <NavBar />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Routes>
          <Route exact path="/movie/:id" element={<MovieInformation />} />
          <Route exact path="/actors/:id" element={<Actors />} />
          <Route exact path="/" element={<Movies />} />
          {/* <Route exact path={["/", "/approved"]} element={<Movies />} /> */}
          <Route exact path="/profile/:id" element={<Profile />} />
          <Route exact path="/approved" element={<Movies />} />
        </Routes>
      </main>
      <div ref={alanBtnContainer} />
    </div>
  );
};

export default App;
