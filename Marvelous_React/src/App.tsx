import React from "react";
import { Browser as Routes, Route } from "react-router-dom";
import CharacterList from "./Components/CharacterList";

function App() {
  return (
    <Routes>
      <Route path="/" element={<CharacterList />} />
    </Routes>
  );
}

export default App;
