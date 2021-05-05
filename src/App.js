import "./App.css";
import Homepage from "./components/HomePage/Homepage";

function App() {
  const BASE_URL = "https://api.themoviedb.org/3";
  const API_KEY = "2dea0d03eb79de1e44ae3fef0d5f501c";

  return (
    <div className="App">
      <Homepage />
    </div>
  );
}

export default App;
