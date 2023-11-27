import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Home, Contact } from "./pages";

export default function App() {
console.log()

  return (
    <main className="bg-slate-300/20">
         <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route
            path='/*'
            element={
              <>
                <Routes>
                  <Route path='/contact' element={<Contact />} />
                  <Route path='/about' element={<About />} />
                </Routes>
              
              </>
            }
          />
        </Routes>
      </Router>
    </main>
  );
}
