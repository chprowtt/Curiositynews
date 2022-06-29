import Home from "./components/Home";
import Navbar from "./components/Navbar"
import News from "./components/News";
import { NewsContextProvider } from "./NewsContext";

function App() {
  return (
    <div>
     <NewsContextProvider>
      <Navbar />
      <Home />
      <News />
      </NewsContextProvider>
    </div>
  );
}

export default App;
