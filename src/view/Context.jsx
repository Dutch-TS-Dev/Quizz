import React, { createContext, useState, useContext } from "react";
import ReactDOM from "react-dom/client";

// Create a Context
const MyContext = createContext();

// Create a Provider component
const MyProvider = ({ children }) => {
  const [state, setState] = useState("Hello, World!");

  return (
    <MyContext.Provider value={{ state, setState }}>
      {children}
    </MyContext.Provider>
  );
};

// Component that consumes the context
const MyComponent = () => {
  const { state, setState } = useContext(MyContext);

  return (
    <div>
      <p>{state}</p>
      <button onClick={() => setState("Hello, React Context!")}>
        Change Text
      </button>
    </div>
  );
};

// Main App component
const App = () => {
  return (
    <MyProvider>
      <MyComponent />
    </MyProvider>
  );
};

// Render the app
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
