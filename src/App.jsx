import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Play from "./view/Play";
import Add from "./view/Add";
import Meet from "./view/Meet";
import { createContext, useState } from "react";
// import UseContext from "../../SPA/21/UseContext";

export const Context = createContext();

export const UserContext = createContext();

const Home = () => {
  return (
    <>
      <div>
        <h1 className="text-[80px] font-bold underline">Hello world!</h1>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
};

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <Context.Provider value={[1, 2]}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/play" element={<Play />} />
          <Route path="/insert" element={<Add />} />
          {/* <Route path="/context" element={<Context />} /> */}
          <Route path="/meet" element={<Meet />} />
          {/* <Route path="/context" element={<seContext />} /> */}
        </Routes>
      </BrowserRouter>
    </Context.Provider>
  );
}

export default App;
