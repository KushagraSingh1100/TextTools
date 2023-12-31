import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Textarea from "./components/Textarea";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About";
function App() {
  const togglemode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "black";
      alerts("Dark mode has been enabled", "success");
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      alerts("Light mode has been enabled", "success");
    }
  };
  const [mode, setmode] = useState("light");

  const [alert, setalert] = useState(null);

  const alerts = (message, type) => {
    setalert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 2000);
  };

  return (
    <>
      <Router>
        <Navbar title="TextTools" mode={mode} togglemode={togglemode} />
        <Alert alert={alert} />
        <div className="container">
          <Routes>
            <Route
              path="/TextTools"
              element={<Textarea mode={mode} alert={alerts} />}
            />
            <Route path="/about" element={<About mode={mode} />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
