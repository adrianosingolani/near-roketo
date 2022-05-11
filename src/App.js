import React from "react";

import Header from './components/Header';
import Info from "./components/Info";
import Rooms from "./components/Rooms";

import { Box } from "@mui/material";

function App() {
  return (
    <div className="App">
      <Header />
      <Box style={{margin: '0 1em'}}>
        <Info />
        <Rooms />
      </Box>
    </div>
  );
}

export default App;
