import { useEffect } from "react";
import "./App.css";
import Header from "./components/Header/Header";

function App() {
  const BASE_URL = "https://api.themoviedb.org/3";
  const API_KEY = "2dea0d03eb79de1e44ae3fef0d5f501c";

  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
