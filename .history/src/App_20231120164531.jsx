import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

export default function App() {
  return (
    <main className="bg-slate-300/20">
      <Router>
        Navbar
        <Routes>
          <Route />
          <Route />
          <Route /> 
          <Route />
        </Routes>
      </Router>
    </main>
  );
}
