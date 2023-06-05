import "./App.css";
import { Footer, Heading } from "./pages";
import AllRoutes from "./routes/AllRoutes";

function App() {
  return (
    <div className="App">
      <Heading />

      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;
