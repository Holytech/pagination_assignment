import { Route, Routes } from "react-router";
import "./App.css";
import NotFound from "./components/NotFound";
import Users from "./components/Users";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Users />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
