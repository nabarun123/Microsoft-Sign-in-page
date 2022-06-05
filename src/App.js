import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense } from "react";
import Login from "./pages/Login";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Suspense fallback={<div className="loading">...loading</div>}>
              <Login />
            </Suspense>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
